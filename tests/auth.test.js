// Integration tests for POST /api/auth/signup and POST /api/auth/login

import request from 'supertest';
import app from '../app.js';

// Mocks
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

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const mockUserId = new mongoose.Types.ObjectId();
const mockUser = { _id: mockUserId, firstName: 'Test', lastName: 'User', email: 'test@example.com', password: 'hashed_password' };

// Tests

describe('POST /api/auth/signup', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return 201 and create account with valid data', async () => {
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue(mockUser);

    const res = await request(app).post('/api/auth/signup').send({
      firstName: 'Test', lastName: 'User', email: 'test@example.com', password: 'password123',
    });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('Account created.');
    expect(res.body.userId).toBeDefined();
  });

  it('should return 400 when required fields are missing', async () => {
    const res = await request(app).post('/api/auth/signup').send({ email: 'test@example.com', password: 'password123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required.');
  });

  it('should return 409 when email is already registered', async () => {
    User.findOne.mockResolvedValue(mockUser);
    const res = await request(app).post('/api/auth/signup').send({
      firstName: 'Test', lastName: 'User', email: 'test@example.com', password: 'password123',
    });
    expect(res.status).toBe(409);
    expect(res.body.error).toBe('Email already registered.');
  });
});

// Login Tests

describe('POST /api/auth/login', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return 200 and set JWT cookie on valid credentials', async () => {
    User.findOne.mockResolvedValue(mockUser);
    User.findById.mockResolvedValue(mockUser);
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

    const res = await request(app).post('/api/auth/login').send({ email: 'test@example.com', password: 'password123' });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Login successful.');
    expect(res.headers['set-cookie']).toBeDefined();
  });

  it('should return 400 when email or password is missing', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'test@example.com' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Email and password are required.');
  });

  it('should return 401 when password is incorrect', async () => {
    User.findOne.mockResolvedValue(mockUser);
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);
    const res = await request(app).post('/api/auth/login').send({ email: 'test@example.com', password: 'wrong' });
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Invalid credentials.');
  });

  it('should return 401 when user does not exist', async () => {
    User.findOne.mockResolvedValue(null);
    const res = await request(app).post('/api/auth/login').send({ email: 'nobody@example.com', password: 'pass' });
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Invalid credentials.');
  });
});

// Logout Tests

describe('GET /api/auth/logout', () => {
  it('should clear the JWT cookie and redirect to /', async () => {
    const res = await request(app).get('/api/auth/logout');
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe('/');
  });
});
