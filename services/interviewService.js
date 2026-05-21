import { spawn } from 'child_process';
import path from 'path';
import InterviewLog from '../models/InterviewLog.js';

const __dirname = path.resolve();

const SCRIPT_PATH = path.join(__dirname, 'python', 'interview_engine.py');

/**
 * @param {Object} interviewData — the cleaned interview form payload
 * @returns {Promise<Object>}    — parsed JSON result from Python
 */
const runInterviewEngine = (interviewData) => {
    return new Promise((resolve, reject) => {
        let dataString  = '';
        let errorString = '';

        const jsonArg = JSON.stringify(interviewData);

        const pythonCmd = process.platform === 'win32' ? 'py' : path.join(__dirname, 'venv', 'bin', 'python');
        const pythonProcess = spawn(pythonCmd, [SCRIPT_PATH, jsonArg]);

        pythonProcess.stdout.on('data', (data) => {
            dataString += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorString += data.toString();
            console.error(`[INTERVIEW] stderr: ${data}`);
        });

        pythonProcess.on('error', (err) => {
            reject(new Error(`Failed to start Python process: ${err.message}`));
        });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                console.error(`[INTERVIEW] Python exited with code ${code}. stderr: ${errorString}`);
                return reject(new Error('Error processing interview data.'));
            }

            try {
                const result = JSON.parse(dataString);
                resolve(result);
            } catch (parseErr) {
                console.error('[INTERVIEW] Failed to parse output:', parseErr, '| Raw:', dataString);
                reject(new Error('Invalid response from interview analysis engine.'));
            }
        });
    });
};

export const processAndSaveInterview = async (userId, body) => {
    const data = {
        interviewDate:     body.interviewDate     ? new Date(body.interviewDate) : null,
        companyName:       body.companyName        || '',
        jobTitle:          body.jobTitle           || '',
        interviewType:     body.interviewType      || 'Mixed',
        interviewDuration: Number(body.interviewDuration) || 0,
        numberOfRounds:    Number(body.numberOfRounds)    || 1,
        outcome:           body.outcome            || 'Awaiting',
        jobDescription:       body.jobDescription       || '',
        coreSkillsRequired:   Array.isArray(body.coreSkillsRequired)
            ? body.coreSkillsRequired
            : (body.coreSkillsRequired ? body.coreSkillsRequired.split(',').map(s => s.trim()) : []),
        yourSkills:           Array.isArray(body.yourSkills)
            ? body.yourSkills
            : (body.yourSkills ? body.yourSkills.split(',').map(s => s.trim()) : []),
        preparationLevel:     Number(body.preparationLevel)  || 1,
        mockInterviewsDone:   body.mockInterviewsDone   === 'true' || body.mockInterviewsDone === true,
        compensationDiscussed:body.compensationDiscussed === 'true' || body.compensationDiscussed === true,
        technicalSkillRating: Number(body.technicalSkillRating) || 5,
        problemSolvingRating: Number(body.problemSolvingRating) || 5,
        solvedQuestions:      body.solvedQuestions      || 'Partially',
        neededHints:          body.neededHints          === 'true' || body.neededHints === true,
        difficultyLevel:      body.difficultyLevel      || 'Medium',
        technicalDescription: body.technicalDescription || '',
        communicationRating:  Number(body.communicationRating)  || 5,
        behaviouralRating:    Number(body.behaviouralRating)    || 5,
        explainedClearly:     body.explainedClearly     === 'true' || body.explainedClearly === true,
        usedRealExamples:     body.usedRealExamples     === 'true' || body.usedRealExamples === true,
        usedStarMethod:       body.usedStarMethod        === 'true' || body.usedStarMethod === true,
        commDescription:      body.commDescription       || '',
        confidenceRating:    Number(body.confidenceRating)    || 5,
        nervousnessLevel:    Number(body.nervousnessLevel)    || 5,
        panickedAtAnyPoint:  body.panickedAtAnyPoint  === 'true' || body.panickedAtAnyPoint === true,
        overallSelfRating:   Number(body.overallSelfRating)   || 5,
        whatWentWell:        body.whatWentWell         || '',
        whatWentWrong:       body.whatWentWrong        || '',
        whatToImprove:       body.whatToImprove        || '',
        interviewerAskedFollowUps: body.interviewerAskedFollowUps === 'true' || body.interviewerAskedFollowUps === true,
        timeTakenToSolve:    body.timeTakenToSolve ? Number(body.timeTakenToSolve) : null,
        wouldHireYourself:   body.wouldHireYourself === 'true' || body.wouldHireYourself === true,
    };

    const result = await runInterviewEngine(data);
    if (result.error) return result;

    await InterviewLog.create({
        user: userId,
        ...data,
        jobFitScore:               result.scores.jobFitScore,
        interviewPerformanceScore: result.scores.interviewPerformanceScore,
        confidenceScore:           result.scores.confidenceScore,
        readinessScore:            result.scores.readinessScore,
        analysisResult:            result,
    });

    return result;
};
