// Integration tests for POST /api/interview/analyze

import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import request from 'supertest';

process.env.JWT_SECRET = 'resurge-secret-fallback-key-2026';

// Mocks

jest.mock('../models/User.js', () => ({
  __esModule: true,
  default: { findOne: jest.fn(), findById: jest.fn(), create: jest.fn() },
}));
jest.mock('../services/interviewService.js', () => ({
  processAndSaveInterview: jest.fn(),
}));
jest.mock('../services/syncService.js', () => ({
  syncUser: jest.fn(), syncResume: jest.fn(), syncInterviewLog: jest.fn(), syncSupportTicket: jest.fn(),
}));
jest.mock('../config/prisma.js', () => ({
  __esModule: true,
  default: { pgUser: { findUnique: jest.fn(), upsert: jest.fn() } },
}));

import User from '../models/User.js';
import { processAndSaveInterview } from '../services/interviewService.js';
import { requireApiAuth } from '../middlewares/auth.js';
import { analyzeInterview } from '../controllers/interviewController.js';

const testApp = express();
testApp.use(express.json());
testApp.use(cookieParser());
testApp.post('/api/interview/analyze', requireApiAuth, analyzeInterview);

const SECRET = 'resurge-secret-fallback-key-2026';
const mockUserId = new mongoose.Types.ObjectId();
const validToken = jwt.sign({ id: mockUserId.toString() }, SECRET, { expiresIn: 86400 });
const mockUser = { _id: mockUserId, email: 'test@example.com', firstName: 'Test', lastName: 'User' };
const validPayload = { companyName: 'Google', jobTitle: 'SWE', interviewType: 'Technical', outcome: 'Selected' };
const mockResult = { scores: { jobFitScore: 85, interviewPerformanceScore: 78, confidenceScore: 72, readinessScore: 80 } };

// Tests

describe('POST /api/interview/analyze', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return 401 when no JWT cookie is provided', async () => {
    const res = await request(testApp).post('/api/interview/analyze').send(validPayload);
    expect(res.status).toBe(401);
    expect(res.body.error).toContain('Unauthorized');
  });

  it('should return 200 with analysis result on valid authenticated request', async () => {
    User.findById.mockResolvedValue(mockUser);
    processAndSaveInterview.mockResolvedValue(mockResult);

    const res = await request(testApp)
      .post('/api/interview/analyze')
      .set('Cookie', [`jwt=${validToken}`])
      .send(validPayload);

    expect(res.status).toBe(200);
    expect(res.body.scores.jobFitScore).toBe(85);
  });

  it('should return 400 when service returns a validation error', async () => {
    User.findById.mockResolvedValue(mockUser);
    processAndSaveInterview.mockResolvedValue({ error: 'Missing required interview fields.' });

    const res = await request(testApp)
      .post('/api/interview/analyze')
      .set('Cookie', [`jwt=${validToken}`])
      .send(validPayload);

    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it('should return 500 when service throws an unexpected error', async () => {
    User.findById.mockResolvedValue(mockUser);
    processAndSaveInterview.mockRejectedValue(new Error('Python engine crashed'));

    const res = await request(testApp)
      .post('/api/interview/analyze')
      .set('Cookie', [`jwt=${validToken}`])
      .send(validPayload);

    expect(res.status).toBe(500);
    expect(res.body.error).toBeDefined();
  });
});
