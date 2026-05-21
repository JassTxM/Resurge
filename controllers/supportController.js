import { createSupportTicket } from '../services/supportService.js';

export const submitSupportTicket = async (req, res) => {
    const { email, subject, content } = req.body;

    if (!email || !subject || !content) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const userId = res.locals.user ? res.locals.user._id : null;

        const ticket = await createSupportTicket({ userId, email, subject, content });

        return res.status(201).json({
            success: true,
            message: 'Your message has been received. We\'ll get back to you within 24 hours.',
            ticketId: ticket._id
        });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to submit your message. Please try again.' });
    }
};
