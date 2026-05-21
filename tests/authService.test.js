// Unit Testing
import mongoose from 'mongoose';

// Mocks

jest.mock('../models/User.js', () => ({
  __esModule: true,
  default: {
    findOne: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
  },
}));

jest.mock('bcryptjs', () => ({
  genSalt: jest.fn().mockResolvedValue('salt'),
  hash: jest.fn().mockResolvedValue('hashed_password'),
  compare: jest.fn(),
}));

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { signupUser, loginUser, generateAuthToken } from '../services/authService.js';

const mockUserId = new mongoose.Types.ObjectId();
const mockUser = {
  _id: mockUserId,
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  password: 'hashed_password',
};

describe('authService.signupUser', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should create a user and return a user + token on success', async () => {
    User.findOne.mockResolvedValue(null);  
    User.create.mockResolvedValue(mockUser);

    const result = await signupUser({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'password123',
    });

    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
    expect(bcrypt.hash).toHaveBeenCalledWith('password123', 'salt');
    expect(User.create).toHaveBeenCalled();
    expect(result.user).toEqual(mockUser);
    expect(result.token).toBeDefined();
    expect(typeof result.token).toBe('string');
  });

  it('should throw "Email already registered." if email exists', async () => {
    User.findOne.mockResolvedValue(mockUser); 

    await expect(signupUser({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'password123',
    })).rejects.toThrow('Email already registered.');

    expect(User.create).not.toHaveBeenCalled();
  });
});

describe('authService.loginUser', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return a user + token on correct credentials', async () => {
    User.findOne.mockResolvedValue(mockUser);
    bcrypt.compare.mockResolvedValue(true);

    const result = await loginUser({ email: 'test@example.com', password: 'password123' });

    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashed_password');
    expect(result.user).toEqual(mockUser);
    expect(result.token).toBeDefined();
  });

  it('should throw "Invalid credentials." when user is not found', async () => {
    User.findOne.mockResolvedValue(null);

    await expect(loginUser({ email: 'nobody@example.com', password: 'pass' }))
      .rejects.toThrow('Invalid credentials.');
  });

  it('should throw "Invalid credentials." when password does not match', async () => {
    User.findOne.mockResolvedValue(mockUser);
    bcrypt.compare.mockResolvedValue(false); 

    await expect(loginUser({ email: 'test@example.com', password: 'wrongpass' }))
      .rejects.toThrow('Invalid credentials.');
  });

  it('should throw "Invalid credentials." when user has no password (OAuth user)', async () => {
    User.findOne.mockResolvedValue({ ...mockUser, password: undefined });

    await expect(loginUser({ email: 'test@example.com', password: 'pass' }))
      .rejects.toThrow('Invalid credentials.');
  });
});

describe('authService.generateAuthToken', () => {
  it('should return a JWT string', () => {
    const token = generateAuthToken(mockUserId.toString());
    expect(typeof token).toBe('string');
    expect(token.split('.')).toHaveLength(3); 
  });
});
