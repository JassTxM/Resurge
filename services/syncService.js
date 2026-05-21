import prisma from '../config/prisma.js';
import mongoose from 'mongoose';

const ensureUserSynced = async (userId) => {
    if (!userId) return;
    try {
        const pgUser = await prisma.pgUser.findUnique({
            where: { id: userId },
        });
        if (!pgUser) {
            const User = mongoose.model('User');
            const userDoc = await User.findById(userId);
            if (userDoc) {
                await syncUser(userDoc);
            }
        }
    } catch (err) {
        console.error('[SYNC] Failed to ensure user is synced:', err.message);
    }
};


export const syncUser = async (doc) => {
    console.log('[SYNC] Attempting to sync user:', doc._id?.toString(), doc.email);
    try {
        const result = await prisma.pgUser.upsert({
            where: { id: doc._id.toString() },
            update: {
                email: doc.email,
                firstName: doc.firstName,
                lastName: doc.lastName,
            },
            create: {
                id: doc._id.toString(),
                email: doc.email,
                firstName: doc.firstName,
                lastName: doc.lastName,
            },
        });
        console.log('[SYNC] User synced successfully:', result.id);
    } catch (err) {
        console.error('[SYNC] Failed to sync user - FULL ERROR:', err);
    }
};

export const syncResume = async (doc) => {
    try {
        const userId = doc.user?.toString();
        if (!userId) return;

        await ensureUserSynced(userId);

        await prisma.pgResume.upsert({
            where: { mongodbId: doc._id.toString() },
            update: {
                atsScore: doc.atsScore ?? null,
                keywordPct: doc.keywordPct ?? null,
                formattingPct: doc.formattingPct ?? null,
                improvementScore: doc.improvementScore ?? null,
                missingSkills: doc.missingSkills ?? [],
            },
            create: {
                mongodbId: doc._id.toString(),
                userId,
                atsScore: doc.atsScore ?? null,
                keywordPct: doc.keywordPct ?? null,
                formattingPct: doc.formattingPct ?? null,
                improvementScore: doc.improvementScore ?? null,
                missingSkills: doc.missingSkills ?? [],
                createdAt: doc.createdAt ?? new Date(),
            },
        });
    } catch (err) {
        console.error('[SYNC] Failed to sync resume:', err.message);
    }
};


export const syncInterviewLog = async (doc) => {
    try {
        const userId = doc.user?.toString();
        if (!userId) return;

        await ensureUserSynced(userId);

        await prisma.pgInterviewLog.upsert({
            where: { mongodbId: doc._id.toString() },
            update: {
                interviewDate: doc.interviewDate ?? null,
                companyName: doc.companyName ?? null,
                jobTitle: doc.jobTitle ?? null,
                interviewType: doc.interviewType ?? null,
                outcome: doc.outcome ?? null,
                difficultyLevel: doc.difficultyLevel ?? null,
                preparationLevel: doc.preparationLevel ?? null,
                technicalRating: doc.technicalSkillRating ?? null,
                problemSolvingRating: doc.problemSolvingRating ?? null,
                communicationRating: doc.communicationRating ?? null,
                behaviouralRating: doc.behaviouralRating ?? null,
                confidenceRating: doc.confidenceRating ?? null,
                nervousnessLevel: doc.nervousnessLevel ?? null,
                usedStar: doc.usedStarMethod ?? null,
                explainedClearly: doc.explainedClearly ?? null,
                usedRealExamples: doc.usedRealExamples ?? null,
                jobFitScore: doc.jobFitScore ?? null,
                performanceScore: doc.interviewPerformanceScore ?? null,
                overallSelfRating: doc.overallSelfRating ?? null,
            },
            create: {
                mongodbId: doc._id.toString(),
                userId,
                interviewDate: doc.interviewDate ?? null,
                companyName: doc.companyName ?? null,
                jobTitle: doc.jobTitle ?? null,
                interviewType: doc.interviewType ?? null,
                outcome: doc.outcome ?? null,
                difficultyLevel: doc.difficultyLevel ?? null,
                preparationLevel: doc.preparationLevel ?? null,
                technicalRating: doc.technicalSkillRating ?? null,
                problemSolvingRating: doc.problemSolvingRating ?? null,
                communicationRating: doc.communicationRating ?? null,
                behaviouralRating: doc.behaviouralRating ?? null,
                confidenceRating: doc.confidenceRating ?? null,
                nervousnessLevel: doc.nervousnessLevel ?? null,
                usedStar: doc.usedStarMethod ?? null,
                explainedClearly: doc.explainedClearly ?? null,
                usedRealExamples: doc.usedRealExamples ?? null,
                jobFitScore: doc.jobFitScore ?? null,
                performanceScore: doc.interviewPerformanceScore ?? null,
                overallSelfRating: doc.overallSelfRating ?? null,
                createdAt: doc.createdAt ?? new Date(),
            },
        });
    } catch (err) {
        console.error('[SYNC] Failed to sync interview log:', err.message);
    }
};

export const syncSupportTicket = async (doc) => {
    try {
        const userId = doc.user?.toString() ?? null;

      
        if (userId) {
            await ensureUserSynced(userId);
        }

        await prisma.pgSupportTicket.upsert({
            where: { mongodbId: doc._id.toString() },
            update: {
                userId,
                subject: doc.subject,
                content: doc.content,
                status: doc.status,
                updatedAt: new Date(),
            },
            create: {
                mongodbId: doc._id.toString(),
                userId,
                email: doc.email,
                subject: doc.subject,
                content: doc.content,
                status: doc.status ?? 'Open',
                createdAt: doc.createdAt ?? new Date(),
                updatedAt: doc.updatedAt ?? new Date(),
            },
        });
    } catch (err) {
        console.error('[SYNC] Failed to sync support ticket:', err.message);
    }
};
