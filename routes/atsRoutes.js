import { Router } from 'express';
import upload from '../middlewares/upload.js';
import { analyzeResume } from '../controllers/atsController.js';
import { requireApiAuth } from '../middlewares/auth.js';

const router = Router();

router.post('/analyze', requireApiAuth, upload.single('resume'), analyzeResume);

export default router;
