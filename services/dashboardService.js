import prisma from '../config/prisma.js';

/* ── Helpers ── */
const round1 = (n) => (n === null || n === undefined ? null : Math.round(n * 10) / 10);
const safeAvg = (val) => (val === null ? 0 : round1(val));

/* ── 1. KPI Cards ── */
const getKpiCards = async (userId) => {
    const total = await prisma.pgInterviewLog.count({ where: { userId } });

    const selected = await prisma.pgInterviewLog.count({
        where: { userId, outcome: 'Selected' },
    });

    const successRate = total === 0 ? 0 : round1((selected / total) * 100);

    const latestResume = await prisma.pgResume.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        select: { atsScore: true },
    });

    const ratingAgg = await prisma.pgInterviewLog.aggregate({
        where: { userId },
        _avg: { overallSelfRating: true },
    });

    return {
        totalInterviews: total,
        successRate,
        latestAtsScore: latestResume?.atsScore ?? null,
        avgSelfRating: round1(ratingAgg._avg.overallSelfRating),
    };
};

/* ── 2. Outcome Breakdown (donut) ── */
const getOutcomeBreakdown = async (userId) => {
    const grouped = await prisma.pgInterviewLog.groupBy({
        by: ['outcome'],
        where: { userId, outcome: { not: null } },
        _count: { outcome: true },
    });
    return grouped.map((g) => ({ outcome: g.outcome, count: g._count.outcome }));
};

/* ── 3. Competency Averages (radar) ── */
const getCompetencyAverages = async (userId) => {
    const agg = await prisma.pgInterviewLog.aggregate({
        where: { userId },
        _avg: {
            technicalRating: true,
            problemSolvingRating: true,
            communicationRating: true,
            behaviouralRating: true,
            confidenceRating: true,
        },
    });
    return {
        technicalRating: safeAvg(agg._avg.technicalRating),
        problemSolvingRating: safeAvg(agg._avg.problemSolvingRating),
        communicationRating: safeAvg(agg._avg.communicationRating),
        behaviouralRating: safeAvg(agg._avg.behaviouralRating),
        confidenceRating: safeAvg(agg._avg.confidenceRating),
    };
};

/* ── 4. Performance by Interview Type (bar) ── */
const getInterviewsByType = async (userId) => {
    const grouped = await prisma.pgInterviewLog.groupBy({
        by: ['interviewType'],
        where: { userId, interviewType: { not: null } },
        _count: { interviewType: true },
        _avg: { performanceScore: true },
    });
    return grouped.map((g) => ({
        type: g.interviewType,
        count: g._count.interviewType,
        avgScore: safeAvg(g._avg.performanceScore),
    }));
};

/* ── 5. Interview Timeline (line) ── */
const getInterviewTimeline = async (userId) => {
    const rows = await prisma.$queryRaw`
        SELECT TO_CHAR("interviewDate", 'YYYY-MM') AS month, COUNT(*)::int AS count
        FROM interview_logs
        WHERE "userId" = ${userId} AND "interviewDate" IS NOT NULL
        GROUP BY month
        ORDER BY month
    `;
    return rows;
};

/* ── 6. ATS Score Progression (line) ── */
const getAtsProgression = async (userId) => {
    const resumes = await prisma.pgResume.findMany({
        where: { userId, atsScore: { not: null } },
        orderBy: { createdAt: 'asc' },
        select: { createdAt: true, atsScore: true },
    });
    return resumes.map((r) => ({
        date: r.createdAt.toISOString().split('T')[0],
        score: r.atsScore,
    }));
};

/* ── 7. Top Missing Skills (horizontal bar) ── */
const getTopMissingSkills = async (userId) => {
    const rows = await prisma.$queryRaw`
        SELECT skill, COUNT(*)::int AS frequency
        FROM resumes, UNNEST("missingSkills") AS skill
        WHERE "userId" = ${userId}
        GROUP BY skill
        ORDER BY frequency DESC
        LIMIT 10
    `;
    return rows;
};

/* ── 8. Nervousness vs Preparation (scatter) ── */
const getNervousnessVsPrep = async (userId) => {
    const logs = await prisma.pgInterviewLog.findMany({
        where: {
            userId,
            preparationLevel: { not: null },
            nervousnessLevel: { not: null },
            outcome: { not: null },
        },
        select: { preparationLevel: true, nervousnessLevel: true, outcome: true },
    });
    return logs.map((l) => ({
        prep: l.preparationLevel,
        nervousness: l.nervousnessLevel,
        outcome: l.outcome,
    }));
};

/* ── 9. Soft Skills Checklist (progress bars) ── */
const getSoftSkillsChecklist = async (userId) => {
    const total = await prisma.pgInterviewLog.count({ where: { userId } });
    const usedStar = await prisma.pgInterviewLog.count({ where: { userId, usedStar: true } });
    const explainedClearly = await prisma.pgInterviewLog.count({ where: { userId, explainedClearly: true } });
    const usedRealExamples = await prisma.pgInterviewLog.count({ where: { userId, usedRealExamples: true } });
    return { total, usedStar, explainedClearly, usedRealExamples };
};

/* ── 10. Difficulty vs Success Rate (table) ── */
const getDifficultySuccessTable = async (userId) => {
    const rows = await prisma.$queryRaw`
        SELECT
            "difficultyLevel" AS difficulty,
            COUNT(*)::int AS total,
            SUM(CASE WHEN outcome = 'Selected' THEN 1 ELSE 0 END)::int AS selected,
            ROUND(
                100.0 * SUM(CASE WHEN outcome = 'Selected' THEN 1 ELSE 0 END) / NULLIF(COUNT(*), 0),
                1
            ) AS rate
        FROM interview_logs
        WHERE "userId" = ${userId} AND "difficultyLevel" IS NOT NULL
        GROUP BY "difficultyLevel"
        ORDER BY "difficultyLevel"
    `;
    return rows;
};

/* ── 11. Recent Interviews (cards) ── */
const getRecentInterviews = async (userId) => {
    const logs = await prisma.pgInterviewLog.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
            companyName: true,
            jobTitle: true,
            interviewDate: true,
            outcome: true,
            performanceScore: true,
            interviewType: true,
        },
    });
    return logs;
};

/* ── 12. Support Tickets ── */
const getSupportTickets = async (userId) => {
    return await prisma.pgSupportTicket.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
    });
};

/* ── Master function ── */
export const getDashboardData = async (userId) => {
    const [
        kpi,
        outcomeBreakdown,
        competencyAvg,
        byType,
        timeline,
        atsProgression,
        missingSkills,
        nervousnessVsPrep,
        softSkills,
        difficultyTable,
        recentInterviews,
        tickets,
    ] = await Promise.all([
        getKpiCards(userId),
        getOutcomeBreakdown(userId),
        getCompetencyAverages(userId),
        getInterviewsByType(userId),
        getInterviewTimeline(userId),
        getAtsProgression(userId),
        getTopMissingSkills(userId),
        getNervousnessVsPrep(userId),
        getSoftSkillsChecklist(userId),
        getDifficultySuccessTable(userId),
        getRecentInterviews(userId),
        getSupportTickets(userId),
    ]);

    return {
        kpi,
        outcomeBreakdown,
        competencyAvg,
        byType,
        timeline,
        atsProgression,
        missingSkills,
        nervousnessVsPrep,
        softSkills,
        difficultyTable,
        recentInterviews,
        tickets,
    };
};
