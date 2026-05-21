import mongoose from 'mongoose';
import { syncInterviewLog } from '../services/syncService.js';

const interviewLogSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

        interviewDate: { type: Date },
        companyName: { type: String },
        jobTitle: { type: String },
        interviewType: { type: String, enum: ['Technical', 'HR', 'Managerial', 'Mixed'] },
        interviewDuration: { type: Number },
        numberOfRounds: { type: Number },
        outcome: { type: String, enum: ['Selected', 'Rejected', 'Awaiting'] },

        jobDescription: { type: String },
        coreSkillsRequired: [{ type: String }],
        yourSkills: [{ type: String }],
        preparationLevel: { type: Number, min: 1, max: 5 },
        mockInterviewsDone: { type: Boolean },
        compensationDiscussed: { type: Boolean },

        technicalSkillRating: { type: Number, min: 1, max: 10 },
        problemSolvingRating: { type: Number, min: 1, max: 10 },
        solvedQuestions: { type: String, enum: ['Yes', 'Partially', 'No'] },
        neededHints: { type: Boolean },
        difficultyLevel: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
        technicalDescription: { type: String },

        communicationRating: { type: Number, min: 1, max: 10 },
        behaviouralRating: { type: Number, min: 1, max: 10 },
        explainedClearly: { type: Boolean },
        usedRealExamples: { type: Boolean },
        usedStarMethod: { type: Boolean },
        commDescription: { type: String },

        confidenceRating: { type: Number, min: 1, max: 10 },
        nervousnessLevel: { type: Number, min: 1, max: 10 },
        panickedAtAnyPoint: { type: Boolean },
        overallSelfRating: { type: Number, min: 1, max: 10 },
        whatWentWell: { type: String },
        whatWentWrong: { type: String },
        whatToImprove: { type: String },

        interviewerAskedFollowUps: { type: Boolean },
        timeTakenToSolve: { type: Number },
        wouldHireYourself: { type: Boolean },

        analysisResult: { type: mongoose.Schema.Types.Mixed, default: null },

        jobFitScore: { type: Number, default: null },
        interviewPerformanceScore: { type: Number, default: null },
        confidenceScore: { type: Number, default: null },
        readinessScore: { type: Number, default: null },
    },
    { timestamps: true }
);

interviewLogSchema.post('save', async function(doc) {
    await syncInterviewLog(doc);
});

const InterviewLog = mongoose.model('InterviewLog', interviewLogSchema);
export default InterviewLog;
