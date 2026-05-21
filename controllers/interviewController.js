import { processAndSaveInterview } from '../services/interviewService.js';

export const analyzeInterview = async (req, res) => {
    try {
        const result = await processAndSaveInterview(req.user._id, req.body);

        if (result.error) {
            return res.status(400).json(result);
        }

        return res.status(200).json(result);
    } catch (err) {
        console.error('[INTERVIEW CONTROLLER]', err);
        return res.status(500).json({ error: err.message || 'Error processing interview data.' });
    }
};
