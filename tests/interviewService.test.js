// Unit tests for services/interviewService.js — processAndSaveInterview

import mongoose from 'mongoose';
import { EventEmitter } from 'events';

// Mocks

jest.mock('url', () => ({
  ...jest.requireActual('url'),
  fileURLToPath: () => '/stubbed/path/interviewService.js',
}));

jest.mock('../models/InterviewLog.js', () => ({
  __esModule: true,
  default: { create: jest.fn() },
}));

jest.mock('child_process', () => ({ spawn: jest.fn() }));

import InterviewLog from '../models/InterviewLog.js';
import { spawn } from 'child_process';
import { processAndSaveInterview } from '../services/interviewService.js';

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

const validEngineResult = JSON.stringify({
  scores: { jobFitScore: 82, interviewPerformanceScore: 75, confidenceScore: 70, readinessScore: 78 },
  feedback: 'Solid technical performance.',
});

const validBody = {
  companyName: 'Amazon', jobTitle: 'Backend Engineer', interviewType: 'Technical',
  outcome: 'Selected', overallSelfRating: '8', preparationLevel: '7',
  technicalSkillRating: '8', problemSolvingRating: '7',
  communicationRating: '8', behaviouralRating: '7',
  confidenceRating: '8', nervousnessLevel: '4',
};

// Tests

describe('interviewService.processAndSaveInterview', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should call InterviewLog.create and return analysis result on success', async () => {
    spawn.mockReturnValue(createFakeProcess(validEngineResult, 0));
    InterviewLog.create.mockResolvedValue({});

    const result = await processAndSaveInterview(mockUserId, validBody);

    expect(result.scores.jobFitScore).toBe(82);
    expect(InterviewLog.create).toHaveBeenCalledWith(
      expect.objectContaining({ user: mockUserId, companyName: 'Amazon', jobFitScore: 82 })
    );
  });

  it('should return error object without calling InterviewLog.create when engine returns error', async () => {
    spawn.mockReturnValue(createFakeProcess(JSON.stringify({ error: 'Insufficient data.' }), 0));

    const result = await processAndSaveInterview(mockUserId, validBody);

    expect(result.error).toBe('Insufficient data.');
    expect(InterviewLog.create).not.toHaveBeenCalled();
  });

  it('should reject when Python process exits with non-zero code', async () => {
    spawn.mockReturnValue(createFakeProcess('', 1));
    await expect(processAndSaveInterview(mockUserId, validBody)).rejects.toThrow('Error processing interview data.');
  });

  it('should reject when Python output is not valid JSON', async () => {
    spawn.mockReturnValue(createFakeProcess('INVALID JSON', 0));
    await expect(processAndSaveInterview(mockUserId, validBody)).rejects.toThrow('Invalid response from interview analysis engine.');
  });

  it('should correctly coerce numeric string fields to numbers', async () => {
    spawn.mockReturnValue(createFakeProcess(validEngineResult, 0));
    InterviewLog.create.mockResolvedValue({});

    await processAndSaveInterview(mockUserId, validBody);

    expect(InterviewLog.create).toHaveBeenCalledWith(
      expect.objectContaining({ overallSelfRating: 8, preparationLevel: 7, technicalSkillRating: 8 })
    );
  });

  it('should handle missing optional fields with sensible defaults', async () => {
    spawn.mockReturnValue(createFakeProcess(validEngineResult, 0));
    InterviewLog.create.mockResolvedValue({});

    await processAndSaveInterview(mockUserId, {});

    expect(InterviewLog.create).toHaveBeenCalledWith(
      expect.objectContaining({ companyName: '', jobTitle: '', interviewType: 'Mixed', outcome: 'Awaiting' })
    );
  });
});
