// Unit tests for services/syncService.js


import mongoose from 'mongoose';

// Mocks

jest.mock('../config/prisma.js', () => ({
  __esModule: true,
  default: {
    pgUser: { upsert: jest.fn(), findUnique: jest.fn() },
    pgResume: { upsert: jest.fn() },
    pgInterviewLog: { upsert: jest.fn() },
    pgSupportTicket: { upsert: jest.fn() },
  },
}));

jest.mock('mongoose', () => {
  const actual = jest.requireActual('mongoose');
  return { ...actual, model: jest.fn().mockReturnValue({ findById: jest.fn().mockResolvedValue(null) }) };
});

import prisma from '../config/prisma.js';
import { syncUser, syncResume, syncInterviewLog, syncSupportTicket } from '../services/syncService.js';

const mockObjectId = new mongoose.Types.ObjectId();
const userDoc = { _id: mockObjectId, email: 'test@example.com', firstName: 'Test', lastName: 'User' };

describe('syncService.syncUser', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should call prisma.pgUser.upsert with correct fields', async () => {
    prisma.pgUser.upsert.mockResolvedValue({});
    await syncUser(userDoc);
    expect(prisma.pgUser.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: mockObjectId.toString() },
        create: expect.objectContaining({ email: 'test@example.com' }),
        update: expect.objectContaining({ email: 'test@example.com' }),
      })
    );
  });

  it('should not throw if prisma.pgUser.upsert fails (graceful error handling)', async () => {
    prisma.pgUser.upsert.mockRejectedValue(new Error('PG down'));
    await expect(syncUser(userDoc)).resolves.toBeUndefined();
  });
});

describe('syncService.syncResume', () => {
  const resumeDoc = {
    _id: new mongoose.Types.ObjectId(), user: mockObjectId,
    atsScore: 85, keywordPct: 70, formattingPct: 90,
    improvementScore: 15, missingSkills: ['Docker', 'K8s'], createdAt: new Date(),
  };

  beforeEach(() => jest.clearAllMocks());

  it('should call prisma.pgResume.upsert with correct fields', async () => {
    prisma.pgUser.findUnique.mockResolvedValue({ id: mockObjectId.toString() });
    prisma.pgResume.upsert.mockResolvedValue({});

    await syncResume(resumeDoc);

    expect(prisma.pgResume.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { mongodbId: resumeDoc._id.toString() },
        create: expect.objectContaining({ atsScore: 85, missingSkills: ['Docker', 'K8s'] }),
      })
    );
  });

  it('should skip upsert and return early when doc.user is missing', async () => {
    await syncResume({ ...resumeDoc, user: null });
    expect(prisma.pgResume.upsert).not.toHaveBeenCalled();
  });

  it('should not throw if prisma.pgResume.upsert fails', async () => {
    prisma.pgUser.findUnique.mockResolvedValue({ id: mockObjectId.toString() });
    prisma.pgResume.upsert.mockRejectedValue(new Error('FK violation'));
    await expect(syncResume(resumeDoc)).resolves.toBeUndefined();
  });
});

describe('syncService.syncInterviewLog', () => {
  const interviewDoc = {
    _id: new mongoose.Types.ObjectId(), user: mockObjectId,
    interviewDate: new Date(), companyName: 'Google', jobTitle: 'SWE',
    interviewType: 'Technical', outcome: 'Selected', difficultyLevel: 'Medium',
    preparationLevel: 7, technicalSkillRating: 8, problemSolvingRating: 7,
    communicationRating: 9, behaviouralRating: 8, confidenceRating: 7,
    nervousnessLevel: 4, usedStarMethod: true, explainedClearly: true,
    usedRealExamples: true, jobFitScore: 85, interviewPerformanceScore: 78,
    overallSelfRating: 8, createdAt: new Date(),
  };

  beforeEach(() => jest.clearAllMocks());

  it('should call prisma.pgInterviewLog.upsert with correct fields', async () => {
    prisma.pgUser.findUnique.mockResolvedValue({ id: mockObjectId.toString() });
    prisma.pgInterviewLog.upsert.mockResolvedValue({});

    await syncInterviewLog(interviewDoc);

    expect(prisma.pgInterviewLog.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { mongodbId: interviewDoc._id.toString() },
        create: expect.objectContaining({ companyName: 'Google', outcome: 'Selected' }),
      })
    );
  });

  it('should skip and return early when doc.user is missing', async () => {
    await syncInterviewLog({ ...interviewDoc, user: null });
    expect(prisma.pgInterviewLog.upsert).not.toHaveBeenCalled();
  });

  it('should not throw if prisma.pgInterviewLog.upsert fails', async () => {
    prisma.pgUser.findUnique.mockResolvedValue({ id: mockObjectId.toString() });
    prisma.pgInterviewLog.upsert.mockRejectedValue(new Error('Upsert failed'));
    await expect(syncInterviewLog(interviewDoc)).resolves.toBeUndefined();
  });
});

describe('syncService.syncSupportTicket', () => {
  const ticketDoc = {
    _id: new mongoose.Types.ObjectId(), user: mockObjectId,
    email: 'test@example.com', subject: 'Help needed',
    content: 'Please help.', status: 'Open',
    createdAt: new Date(), updatedAt: new Date(),
  };

  beforeEach(() => jest.clearAllMocks());

  it('should call prisma.pgSupportTicket.upsert with correct fields', async () => {
    prisma.pgUser.findUnique.mockResolvedValue({ id: mockObjectId.toString() });
    prisma.pgSupportTicket.upsert.mockResolvedValue({});

    await syncSupportTicket(ticketDoc);

    expect(prisma.pgSupportTicket.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { mongodbId: ticketDoc._id.toString() },
        create: expect.objectContaining({ subject: 'Help needed', status: 'Open' }),
      })
    );
  });

  it('should sync guest tickets (null user) without checking pgUser', async () => {
    prisma.pgSupportTicket.upsert.mockResolvedValue({});
    await syncSupportTicket({ ...ticketDoc, user: null });
    expect(prisma.pgUser.findUnique).not.toHaveBeenCalled();
    expect(prisma.pgSupportTicket.upsert).toHaveBeenCalled();
  });

  it('should not throw if prisma.pgSupportTicket.upsert fails', async () => {
    prisma.pgUser.findUnique.mockResolvedValue({ id: mockObjectId.toString() });
    prisma.pgSupportTicket.upsert.mockRejectedValue(new Error('PG error'));
    await expect(syncSupportTicket(ticketDoc)).resolves.toBeUndefined();
  });
});
