import mongoose from 'mongoose';
import { syncUser } from '../services/syncService.js';

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String },
        googleId: { type: String, default: null }
    },
    { timestamps: true }
);

userSchema.post('save', async function(doc) {
    await syncUser(doc);
});

const User = mongoose.model('User', userSchema);

export default User;
