import { getDashboardData } from '../services/dashboardService.js';

export const renderDashboard = async (req, res) => {
    try {
        const userId = req.user._id.toString();
        const dashData = await getDashboardData(userId);
        res.render('pages/dashboard', { dashData });
    } catch (err) {
        console.error('[DASHBOARD]', err);
        res.render('pages/dashboard', { dashData: null });
    }
};
