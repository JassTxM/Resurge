import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const getSecret = () => process.env.JWT_SECRET;

export const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, getSecret(), async (err, decodedToken) => {
            if (err) {
                return res.redirect('/logIn');
            } else {
                const user = await User.findById(decodedToken.id);
                if (!user) return res.redirect('/logIn');
                req.user = user;
                next();
            }
        });
    } else {
        return res.redirect('/logIn');
    }
};

export const requireApiAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, getSecret(), async (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ error: 'Unauthorized: Invalid token' });
            } else {
                const user = await User.findById(decodedToken.id);
                if (!user) return res.status(401).json({ error: 'Unauthorized: User not found' });
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
};

export const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, getSecret(), async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};
