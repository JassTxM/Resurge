// Unit tests for services/supportService.js

import mongoose from 'mongoose';

// Mocks
jest.mock('../models/SupportTicket.js', () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
  },
}));

import SupportTicket from '../models/SupportTicket.js';
import { createSupportTicket } from '../services/supportService.js';

const mockTicketId = new mongoose.Types.ObjectId();
const mockUserId = new mongoose.Types.ObjectId();

// Tests

describe('supportService.createSupportTicket', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should call SupportTicket.create with correct fields and return the ticket', async () => {
    const mockTicket = {
      _id: mockTicketId,
      user: mockUserId,
      email: 'user@example.com',
      subject: 'Test',
      content: 'Hello',
    };
    SupportTicket.create.mockResolvedValue(mockTicket);

    const result = await createSupportTicket({
      userId: mockUserId,
      email: 'user@example.com',
      subject: 'Test',
      content: 'Hello',
    });

    expect(SupportTicket.create).toHaveBeenCalledWith({
      user: mockUserId,
      email: 'user@example.com',
      subject: 'Test',
      content: 'Hello',
    });
    expect(result._id).toEqual(mockTicketId);
  });

  it('should pass null as user when userId is not provided (guest)', async () => {
    const mockTicket = { _id: mockTicketId, user: null };
    SupportTicket.create.mockResolvedValue(mockTicket);

    await createSupportTicket({
      userId: null,
      email: 'guest@example.com',
      subject: 'Guest issue',
      content: 'I am a guest.',
    });

    expect(SupportTicket.create).toHaveBeenCalledWith(
      expect.objectContaining({ user: null })
    );
  });

  it('should throw if SupportTicket.create fails', async () => {
    SupportTicket.create.mockRejectedValue(new Error('DB error'));

    await expect(createSupportTicket({
      userId: null,
      email: 'x@x.com',
      subject: 'Error test',
      content: 'test',
    })).rejects.toThrow('DB error');
  });
});
