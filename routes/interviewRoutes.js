import { Router } from 'express';
import { analyzeInterview } from '../controllers/interviewController.js';
import { requireApiAuth } from '../middlewares/auth.js';

const router = Router();
router.post('/analyze', requireApiAuth, analyzeInterview);

export default router;
