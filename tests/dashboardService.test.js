// Unit tests for services/dashboardService.js

// Mocks

jest.mock('../config/prisma.js', () => ({
  __esModule: true,
  default: {
    pgInterviewLog: { count: jest.fn(), aggregate: jest.fn(), groupBy: jest.fn(), findMany: jest.fn() },
    pgResume: { findFirst: jest.fn(), findMany: jest.fn() },
    pgSupportTicket: { findMany: jest.fn() },
    $queryRaw: jest.fn(),
  },
}));

import prisma from '../config/prisma.js';
import { getDashboardData } from '../services/dashboardService.js';

const userId = 'user-abc-123';

function setupDefaultMocks() {
  prisma.pgInterviewLog.count
    .mockResolvedValueOnce(10)  
    .mockResolvedValueOnce(4)   
    .mockResolvedValueOnce(6)   
    .mockResolvedValueOnce(7)   
    .mockResolvedValueOnce(5);  

  prisma.pgResume.findFirst.mockResolvedValue({ atsScore: 78 });

  prisma.pgInterviewLog.aggregate
    .mockResolvedValueOnce({ _avg: { overallSelfRating: 7.5 } })
    .mockResolvedValueOnce({ _avg: { technicalRating: 7, problemSolvingRating: 8, communicationRating: 9, behaviouralRating: 7, confidenceRating: 6 } });

  prisma.pgInterviewLog.groupBy
    .mockResolvedValueOnce([
      { outcome: 'Selected', _count: { outcome: 4 } },
      { outcome: 'Rejected', _count: { outcome: 6 } },
    ])
    .mockResolvedValueOnce([
      { interviewType: 'Technical', _count: { interviewType: 5 }, _avg: { performanceScore: 75 } },
    ]);

  prisma.$queryRaw
    .mockResolvedValueOnce([{ month: '2025-01', count: 3 }])
    .mockResolvedValueOnce([{ skill: 'Docker', frequency: 5 }])
    .mockResolvedValueOnce([{ difficulty: 'Medium', total: 6, selected: 3, rate: 50 }]);

  prisma.pgResume.findMany.mockResolvedValue([
    { createdAt: new Date('2025-01-01'), atsScore: 65 },
    { createdAt: new Date('2025-03-01'), atsScore: 78 },
  ]);

  prisma.pgInterviewLog.findMany
    .mockResolvedValueOnce([{ preparationLevel: 8, nervousnessLevel: 3, outcome: 'Selected' }])
    .mockResolvedValueOnce([{ companyName: 'Google', jobTitle: 'SWE', interviewDate: new Date(), outcome: 'Selected', performanceScore: 80, interviewType: 'Technical' }]);

  prisma.pgSupportTicket.findMany.mockResolvedValue([
    { subject: 'Issue', createdAt: new Date(), status: 'Open' },
  ]);
}

// Tests

describe('dashboardService.getDashboardData', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return all 12 dashboard data sections with correct kpi values', async () => {
    setupDefaultMocks();
    const result = await getDashboardData(userId);
    expect(result).toHaveProperty('kpi');
    expect(result).toHaveProperty('outcomeBreakdown');
    expect(result).toHaveProperty('competencyAvg');
    expect(result).toHaveProperty('byType');
    expect(result).toHaveProperty('timeline');
    expect(result).toHaveProperty('atsProgression');
    expect(result).toHaveProperty('missingSkills');
    expect(result).toHaveProperty('nervousnessVsPrep');
    expect(result).toHaveProperty('softSkills');
    expect(result).toHaveProperty('difficultyTable');
    expect(result).toHaveProperty('recentInterviews');
    expect(result).toHaveProperty('tickets');
    expect(result.kpi.totalInterviews).toBe(10);
    expect(result.kpi.latestAtsScore).toBe(78);
    expect(result.kpi.successRate).toBeGreaterThanOrEqual(0);
    expect(result.kpi.successRate).toBeLessThanOrEqual(100);
  });


  it('should return latestAtsScore from the most recent resume', async () => {
    setupDefaultMocks();
    const result = await getDashboardData(userId);
    expect(result.kpi.latestAtsScore).toBe(78);
  });

  it('should return successRate of 0 when there are no interviews', async () => {
    prisma.pgInterviewLog.count
      .mockResolvedValueOnce(0)  
      .mockResolvedValueOnce(0) 
      .mockResolvedValueOnce(0)  
      .mockResolvedValueOnce(0)  
      .mockResolvedValueOnce(0); 
    prisma.pgResume.findFirst.mockResolvedValueOnce(null);
    prisma.pgInterviewLog.aggregate
      .mockResolvedValueOnce({ _avg: { overallSelfRating: null } })
      .mockResolvedValueOnce({ _avg: { technicalRating: null, problemSolvingRating: null, communicationRating: null, behaviouralRating: null, confidenceRating: null } });
    prisma.pgInterviewLog.groupBy.mockResolvedValueOnce([]).mockResolvedValueOnce([]);
    prisma.$queryRaw.mockResolvedValueOnce([]).mockResolvedValueOnce([]).mockResolvedValueOnce([]);
    prisma.pgResume.findMany.mockResolvedValueOnce([]);
    prisma.pgInterviewLog.findMany.mockResolvedValueOnce([]).mockResolvedValueOnce([]);
    prisma.pgSupportTicket.findMany.mockResolvedValueOnce([]);

    const result = await getDashboardData(userId);
    expect(result.kpi.totalInterviews).toBe(0);
    expect(result.kpi.successRate).toBe(0);
    expect(result.kpi.latestAtsScore).toBeNull();
  });

  it('should map ATS progression to {date, score} format', async () => {
    setupDefaultMocks();
    const result = await getDashboardData(userId);
    expect(result.atsProgression[0]).toEqual(expect.objectContaining({ date: '2025-01-01', score: 65 }));
  });

  it('should map outcome breakdown to {outcome, count} format', async () => {
    setupDefaultMocks();
    const result = await getDashboardData(userId);
    expect(result.outcomeBreakdown).toContainEqual({ outcome: 'Selected', count: 4 });
    expect(result.outcomeBreakdown).toContainEqual({ outcome: 'Rejected', count: 6 });
  });
});
