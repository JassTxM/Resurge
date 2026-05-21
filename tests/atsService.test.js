import mongoose from 'mongoose';
import { EventEmitter } from 'events';

// Mock

jest.mock('url', () => ({
  ...jest.requireActual('url'),
  fileURLToPath: () => '/stubbed/path/atsService.js',
}));

jest.mock('../models/Resume.js', () => ({
  __esModule: true,
  default: { create: jest.fn() },
}));

jest.mock('child_process', () => ({ spawn: jest.fn() }));

jest.mock('fs', () => ({ unlink: jest.fn((path, cb) => cb(null)) }));



import Resume from '../models/Resume.js';
import { spawn } from 'child_process';
import { analyzeAndSaveResume } from '../services/atsService.js';

const mockUserId = new mongoose.Types.ObjectId();

function createFakeProcess(stdoutData, exitCode = 0) {
  const proc = new EventEmitter();
  proc.stdout = new EventEmitter();
  proc.stderr = new EventEmitter();
  process.nextTick(() => {
    if (stdoutData) proc.stdout.emit('data', stdoutData);
    proc.emit('close', exitCode);
  });
  return proc;
}

const validAtsResult = JSON.stringify({
  matchPct: 85, keywordPct: 72, formattingPct: 90,
  keywords: ['JavaScript', 'Node.js'],
  roadmap: ['Add Docker experience'],
  review: 'Good resume overall.',
  improvementScore: 15,
  missingSkills: ['Docker', 'K8s'],
});

// Tests

describe('atsService.analyzeAndSaveResume', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should call Resume.create and return parsed result on success', async () => {
    spawn.mockReturnValue(createFakeProcess(validAtsResult, 0));
    Resume.create.mockResolvedValue({});

    const result = await analyzeAndSaveResume(mockUserId, '/tmp/fake.pdf', 'Node.js developer');

    expect(result.matchPct).toBe(85);
    expect(result.missingSkills).toContain('Docker');
    expect(Resume.create).toHaveBeenCalledWith(
      expect.objectContaining({ atsScore: 85, missingSkills: ['Docker', 'K8s'] })
    );
  });

  it('should return error object without calling Resume.create when Python returns error', async () => {
    spawn.mockReturnValue(createFakeProcess(JSON.stringify({ error: 'Cannot parse resume' }), 0));

    const result = await analyzeAndSaveResume(mockUserId, '/tmp/bad.pdf', '');

    expect(result.error).toBe('Cannot parse resume');
    expect(Resume.create).not.toHaveBeenCalled();
  });

  it('should reject when Python process exits with non-zero code', async () => {
    spawn.mockReturnValue(createFakeProcess('', 1));
    await expect(analyzeAndSaveResume(mockUserId, '/tmp/crash.pdf', '')).rejects.toThrow('Error processing resume.');
  });

  it('should reject when Python output is not valid JSON', async () => {
    spawn.mockReturnValue(createFakeProcess('NOT JSON', 0));
    await expect(analyzeAndSaveResume(mockUserId, '/tmp/garbage.pdf', '')).rejects.toThrow('Invalid response from ATS scoring engine.');
  });
});
