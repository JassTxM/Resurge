import { analyzeAndSaveResume } from '../services/atsService.js';

export const analyzeResume = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No resume file uploaded.' });
    }
    const resumePath = req.file.path;
    const jobDescription = req.body.jobDescription || '';
    try {
        const result = await analyzeAndSaveResume(req.user._id, resumePath, jobDescription);
        if (result.error) return res.status(400).json(result);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Error processing resume.' });
    }
};
