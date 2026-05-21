import SupportTicket from '../models/SupportTicket.js';

/**
 * Creates and persists a new support ticket in MongoDB.
 * @param {Object} params
 * @param {string|null} params.userId - Authenticated user's ObjectId (or null if guest)
 * @param {string} params.email
 * @param {string} params.subject
 * @param {string} params.content
 * @returns {Promise<Object>} The saved ticket document
 */
export const createSupportTicket = async ({ userId, email, subject, content }) => {
    const ticket = await SupportTicket.create({
        user: userId || null,
        email,
        subject,
        content
    });
    return ticket;
};
