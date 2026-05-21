// Integration tests for POST /api/support/submit

import request from 'supertest';
import app from '../app.js';

// Mocks

jest.mock('../models/SupportTicket.js', () => ({
  __esModule: true,
  default: { create: jest.fn() },
}));
jest.mock('../models/User.js', () => ({
  __esModule: true,
  default: { findOne: jest.fn(), findById: jest.fn(), create: jest.fn() },
}));
jest.mock('../services/syncService.js', () => ({
  syncUser: jest.fn(), syncResume: jest.fn(), syncInterviewLog: jest.fn(), syncSupportTicket: jest.fn(),
}));
jest.mock('../config/prisma.js', () => ({
  __esModule: true,
  default: { pgUser: { findUnique: jest.fn(), upsert: jest.fn() } },
}));
jest.mock('../config/passport.js', () => ({
  __esModule: true,
  default: { initialize: () => (req, res, next) => next() },
}));
jest.mock('../routes/atsRoutes.js', () => {
  const { Router } = require('express');
  return { __esModule: true, default: Router() };
});
jest.mock('../routes/interviewRoutes.js', () => {
  const { Router } = require('express');
  return { __esModule: true, default: Router() };
});

import SupportTicket from '../models/SupportTicket.js';
import mongoose from 'mongoose';

const mockTicketId = new mongoose.Types.ObjectId();
const validPayload = { email: 'user@example.com', subject: 'Test issue', content: 'This is my message.' };

// Tests

describe('POST /api/support/submit', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return 201 with a ticketId on success', async () => {
    SupportTicket.create.mockResolvedValue({ _id: mockTicketId, ...validPayload });
    const res = await request(app).post('/api/support/submit').send(validPayload);
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.ticketId).toBeDefined();
    expect(res.body.message).toContain('24 hours');
  });

  it('should return 400 when email is missing', async () => {
    const res = await request(app).post('/api/support/submit').send({ subject: 'Test', content: 'Content' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required.');
  });

  it('should return 400 when subject is missing', async () => {
    const res = await request(app).post('/api/support/submit').send({ email: 'a@a.com', content: 'Content' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required.');
  });

  it('should return 400 when content is missing', async () => {
    const res = await request(app).post('/api/support/submit').send({ email: 'a@a.com', subject: 'Sub' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required.');
  });

  it('should return 500 when the database throws an error', async () => {
    SupportTicket.create.mockRejectedValue(new Error('DB connection failed'));
    const res = await request(app).post('/api/support/submit').send(validPayload);
    expect(res.status).toBe(500);
    expect(res.body.error).toContain('Failed to submit');
  });
});
