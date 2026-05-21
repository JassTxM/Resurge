import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getSecret = () => process.env.JWT_SECRET || 'resurge-secret-fallback-key-2026';
export const maxAge = 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, getSecret(), { expiresIn: maxAge });
};

export const generateAuthToken = (userId) => {
    return createToken(userId);
};

export const signupUser = async ({ firstName, lastName, email, password }) => {
    const existing = await User.findOne({ email });
    if (existing) {
        throw new Error('Email already registered.');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ firstName, lastName, email, password: hashedPassword });
    const token = createToken(user._id);
    return { user, token };
};

export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !user.password) {
        throw new Error('Invalid credentials.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials.');
    }

    const token = createToken(user._id);
    return { user, token };
};
