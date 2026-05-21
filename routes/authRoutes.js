import { Router } from 'express';
import { signup, login, logout, googleCallback } from '../controllers/authController.js';
import passport from 'passport';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/logIn' }), googleCallback);

export default router;
