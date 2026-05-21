import mongoose from 'mongoose';
import { syncSupportTicket } from '../services/syncService.js';

const supportTicketSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
        email: { type: String, required: true, lowercase: true, trim: true },
        subject: { type: String, required: true, trim: true },
        content: { type: String, required: true, trim: true },
        status: {
            type: String,
            enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
            default: 'Open'
        }
    },
    { timestamps: true }
);

supportTicketSchema.post('save', async function(doc) {
    await syncSupportTicket(doc);
});

const SupportTicket = mongoose.model('SupportTicket', supportTicketSchema);

export default SupportTicket;
