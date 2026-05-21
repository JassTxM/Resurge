import { Router } from 'express';
import { submitSupportTicket } from '../controllers/supportController.js';

const router = Router();

router.post('/submit', submitSupportTicket);

export default router;
