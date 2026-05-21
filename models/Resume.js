import mongoose from 'mongoose';
import { syncResume } from '../services/syncService.js';

const resumeSchema = new mongoose.Schema(
    {
        user:             { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        jobDescription:   { type: String },
        atsScore:         { type: Number, default: null },
        keywordPct:       { type: Number, default: null },
        formattingPct:    { type: Number, default: null },
        keywords:         [{ type: String }],
        roadmap:          [{ type: String }],
        review:           { type: String },
        improvementScore: { type: Number, default: null },
        missingSkills:    [{ type: String }],
        analysisResult:   { type: mongoose.Schema.Types.Mixed, default: null }
    },
    { timestamps: true }
);

resumeSchema.post('save', async function(doc) {
    await syncResume(doc);
});

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
