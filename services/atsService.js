import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import Resume from '../models/Resume.js';

const __dirname = path.resolve();

const SCRIPT_PATH = path.join(__dirname, '..', 'python', 'ats_engine.py');

const runAtsEngine = (resumePath, jobDescription = '') => {
    return new Promise((resolve, reject) => {
        let dataString = '';
        let errorString = '';

        const pythonProcess = spawn('py', [SCRIPT_PATH, resumePath, jobDescription]);

        pythonProcess.stdout.on('data', (data) => {
            dataString += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorString += data.toString();
            console.error(`[ATS] stderr: ${data}`);
        });

        pythonProcess.on('error', (err) => {
            reject(new Error(`Failed to start Python process: ${err.message}`));
        });

        pythonProcess.on('close', (code) => {
            fs.unlink(resumePath, (unlinkErr) => {
                if (unlinkErr) console.error('[ATS] Error deleting temp file:', unlinkErr);
            });

            if (code !== 0) {
                console.error(`[ATS] Python exited with code ${code}. stderr: ${errorString}`);
                return reject(new Error('Error processing resume.'));
            }

            try {
                const result = JSON.parse(dataString);
                resolve(result);
            } catch (parseErr) {
                console.error('[ATS] Failed to parse output:', parseErr, '| Raw:', dataString);
                reject(new Error('Invalid response from ATS scoring engine.'));
            }
        });
    });
};

export const analyzeAndSaveResume = async (userId, resumePath, jobDescription) => {
    const result = await runAtsEngine(resumePath, jobDescription);
    if (result.error) return result;
    
    await Resume.create({
        user: userId,
        jobDescription: jobDescription,
        atsScore: result.matchPct,
        keywordPct: result.keywordPct,
        formattingPct: result.formattingPct,
        keywords: result.keywords,
        roadmap: result.roadmap,
        review: result.review,
        improvementScore: result.improvementScore,
        missingSkills: result.missingSkills,
        analysisResult: result
    });

    return result;
};
