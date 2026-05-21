import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { renderDashboard } from '../controllers/dashboardController.js';

const router = Router();

router.get('/', requireAuth, renderDashboard);

export default router;
