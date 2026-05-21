import * as authService from '../services/authService.js';

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        const { user, token } = await authService.signupUser({ firstName, lastName, email, password });
        res.cookie('jwt', token, { httpOnly: true, maxAge: authService.maxAge * 1000 });
        return res.status(201).json({ message: 'Account created.', userId: user._id });
    } catch (err) {
        const statusCode = err.message === 'Email already registered.' ? 409 : 500;
        return res.status(statusCode).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }
    try {
        const { user, token } = await authService.loginUser({ email, password });
        res.cookie('jwt', token, { httpOnly: true, maxAge: authService.maxAge * 1000 });
        return res.status(200).json({ message: 'Login successful.', userId: user._id });
    } catch (err) {
        const statusCode = err.message === 'Invalid credentials.' ? 401 : 500;
        return res.status(statusCode).json({ error: err.message });
    }
};

export const logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};

export const googleCallback = (req, res) => {
    const token = authService.generateAuthToken(req.user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: authService.maxAge * 1000 });
    res.redirect('/');
};
