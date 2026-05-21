import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { 
    renderIndex, 
    renderSupport, 
    renderLogin, 
    renderSignup, 
    renderResumeScore, 
    renderInterviewLog 
} from '../controllers/viewController.js';

const router = Router();

router.get('/', renderIndex);
router.get('/support', renderSupport);
router.get('/logIn', renderLogin);
router.get('/signUp', renderSignup);
router.get('/resumeScore', requireAuth, renderResumeScore);
router.get('/interviewLog', requireAuth, renderInterviewLog);

export default router;
