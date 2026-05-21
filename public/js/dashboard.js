/* ============================================================
   DASHBOARD.JS — Chart.js initialisation
   Reads from global DASH_DATA injected by EJS
   ============================================================ */

(function () {
  'use strict';

  function init() {
    if (!window.DASH_DATA) return;
    const D = window.DASH_DATA;

    const COLORS = {
      blue:   '#0050FF',
      red:    '#E8000D',
      green:  '#00CC44',
      purple: '#7B00FF',
      orange: '#FF4D00',
      pink:   '#FF0080',
      yellow: '#FFD000',
      muted:  '#AAAAAA'
    };

    const tooltipStyle = {
      backgroundColor: '#0F0F0F',
      titleColor: '#F7F6F3',
      bodyColor: '#CCCCCC',
      borderColor: '#444',
      borderWidth: 1,
      titleFont: { family: "'Space Mono', monospace", weight: '700', size: 11 },
      bodyFont:  { family: "'JetBrains Mono', monospace", size: 11 },
      padding: 12,
      cornerRadius: 0
    };

    const subtleGrid = { color: 'rgba(0,0,0,0.06)' };

    // ── Helper: get canvas context safely ──
    function ctx(id) {
      const el = document.getElementById(id);
      return el ? el.getContext('2d') : null;
    }

    // ────────────────────────────────────────────────
    // 1. RADAR — Competency
    // ────────────────────────────────────────────────
    const radarC = ctx('radarChart');
    if (radarC) {
      const ca = D.competencyAvg || {};
      new Chart(radarC, {
        type: 'radar',
        data: {
          labels: ['Technical', 'Problem Solving', 'Communication', 'Behavioural', 'Confidence'],
          datasets: [{
            label: 'Avg Rating',
            data: [
              ca.technicalRating    || 0,
              ca.problemSolvingRating || 0,
              ca.communicationRating  || 0,
              ca.behaviouralRating    || 0,
              ca.confidenceRating     || 0
            ],
            backgroundColor: 'rgba(0,80,255,0.15)',
            borderColor: COLORS.blue,
            borderWidth: 2,
            pointBackgroundColor: COLORS.blue,
            pointBorderColor: '#fff',
            pointRadius: 5,
            pointHoverRadius: 7,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0, max: 10,
              ticks: { stepSize: 2, backdropColor: 'transparent', font: { size: 10 } },
              grid: { color: 'rgba(0,0,0,0.07)' },
              angleLines: { color: 'rgba(0,0,0,0.07)' },
              pointLabels: {
                font: { size: 11, family: "'JetBrains Mono', monospace", weight: '600' },
                color: '#444'
              }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: tooltipStyle
          }
        }
      });
    }

    // ────────────────────────────────────────────────
    // 2. DONUT — Outcome Breakdown
    // ────────────────────────────────────────────────
    const donutC = ctx('donutChart');
    if (donutC) {
      const outcomes = (D.outcomeBreakdown && D.outcomeBreakdown.length)
        ? D.outcomeBreakdown
        : [{ outcome: 'No Data', count: 1 }];

      const outcomeColorMap = {
        'Selected': COLORS.green,
        'Rejected': COLORS.red,
        'Awaiting': COLORS.orange,
        'No Data':  COLORS.muted
      };

      const labels = outcomes.map(o => o.outcome || 'Other');
      const data   = outcomes.map(o => o.count);
      const bgs    = labels.map(l => outcomeColorMap[l] || COLORS.muted);

      new Chart(donutC, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{ data, backgroundColor: bgs, borderColor: '#fff', borderWidth: 3, hoverOffset: 6 }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 16,
                usePointStyle: true,
                pointStyle: 'rectRounded',
                font: { size: 11, family: "'JetBrains Mono', monospace", weight: '600' }
              }
            },
            tooltip: tooltipStyle
          }
        }
      });
    }

    // ────────────────────────────────────────────────
    // 3. LINE — ATS Score Progression
    // ────────────────────────────────────────────────
    const atsC = ctx('atsChart');
    if (atsC) {
      const atsData = (D.atsProgression && D.atsProgression.length)
        ? D.atsProgression
        : [{ date: new Date().toISOString(), score: 0 }];

      const atsLabels = atsData.map(a => {
        try { return new Date(a.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }); }
        catch { return a.date; }
      });

      new Chart(atsC, {
        type: 'line',
        data: {
          labels: atsLabels,
          datasets: [{
            label: 'ATS Score',
            data: atsData.map(a => a.score),
            borderColor: COLORS.purple,
            backgroundColor: 'rgba(123,0,255,0.12)',
            borderWidth: 2.5,
            tension: 0.3,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: COLORS.purple,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 7
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: subtleGrid, ticks: { font: { size: 10 } } },
            y: { min: 0, max: 100, grid: subtleGrid, ticks: { font: { size: 10 } } }
          },
          plugins: { legend: { display: false }, tooltip: tooltipStyle }
        }
      });
    }

    // ────────────────────────────────────────────────
    // 4. BAR — Interview Timeline
    // ────────────────────────────────────────────────
    const timelineC = ctx('timelineChart');
    if (timelineC) {
      const tlData = (D.timeline && D.timeline.length)
        ? D.timeline
        : [{ month: 'No data', count: 0 }];

      new Chart(timelineC, {
        type: 'bar',
        data: {
          labels: tlData.map(t => t.month),
          datasets: [{
            label: 'Interviews',
            data: tlData.map(t => t.count),
            backgroundColor: COLORS.blue,
            borderWidth: 0,
            borderSkipped: false,
            barPercentage: 0.6,
            borderRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 } } },
            y: { beginAtZero: true, grid: subtleGrid, ticks: { stepSize: 1, precision: 0, font: { size: 10 } } }
          },
          plugins: { legend: { display: false }, tooltip: tooltipStyle }
        }
      });
    }

    // ────────────────────────────────────────────────
    // 5. BAR — Performance by Interview Type
    // ────────────────────────────────────────────────
    const typeC = ctx('typeChart');
    if (typeC) {
      const typeData = (D.byType && D.byType.length)
        ? D.byType
        : [{ type: 'No Data', count: 0, avgScore: 0 }];

      const typeColors = { Technical: COLORS.blue, HR: COLORS.green, Managerial: COLORS.purple, Mixed: COLORS.orange };
      const typeLabels = typeData.map(t => t.type || 'Other');

      new Chart(typeC, {
        type: 'bar',
        data: {
          labels: typeLabels,
          datasets: [{
            label: 'Avg Score',
            data: typeData.map(t => t.avgScore || 0),
            backgroundColor: typeLabels.map(l => typeColors[l] || COLORS.muted),
            borderWidth: 0,
            borderSkipped: false,
            barPercentage: 0.55
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 } } },
            y: { beginAtZero: true, grid: subtleGrid, ticks: { font: { size: 10 } } }
          },
          plugins: { legend: { display: false }, tooltip: tooltipStyle }
        }
      });
    }

    // ────────────────────────────────────────────────
    // 6. SCATTER — Nervousness vs Preparation
    // ────────────────────────────────────────────────
    const scatterC = ctx('scatterChart');
    if (scatterC) {
      const scatterData = (D.nervousnessVsPrep && D.nervousnessVsPrep.length)
        ? D.nervousnessVsPrep
        : [];

      const scatterColors = { Selected: COLORS.green, Rejected: COLORS.red, Awaiting: COLORS.orange };
      const outcomeGroups = {};
      scatterData.forEach(p => {
        const key = p.outcome || 'Other';
        if (!outcomeGroups[key]) outcomeGroups[key] = [];
        outcomeGroups[key].push({ x: p.prep, y: p.nervousness });
      });

      // Always render even if empty
      const datasets = Object.keys(outcomeGroups).length
        ? Object.keys(outcomeGroups).map(key => ({
            label: key,
            data: outcomeGroups[key],
            backgroundColor: scatterColors[key] || COLORS.muted,
            pointRadius: 8,
            pointHoverRadius: 10,
            pointBorderWidth: 2,
            pointBorderColor: '#fff'
          }))
        : [{ label: 'No data', data: [], backgroundColor: COLORS.muted }];

      new Chart(scatterC, {
        type: 'scatter',
        data: { datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: { display: true, text: 'Preparation Level', font: { size: 10 } },
              min: 0, max: 6, grid: subtleGrid, ticks: { stepSize: 1, font: { size: 10 } }
            },
            y: {
              title: { display: true, text: 'Nervousness Level', font: { size: 10 } },
              min: 0, max: 11, grid: subtleGrid, ticks: { stepSize: 2, font: { size: 10 } }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: { padding: 16, usePointStyle: true, font: { size: 11 } }
            },
            tooltip: tooltipStyle
          }
        }
      });
    }

    // ────────────────────────────────────────────────
    // 7. HORIZONTAL BAR — Top Missing Skills
    // ────────────────────────────────────────────────
    const skillsC = ctx('skillsChart');
    if (skillsC) {
      const skillData = (D.missingSkills && D.missingSkills.length)
        ? D.missingSkills
        : [{ skill: 'No data yet', frequency: 0 }];

      new Chart(skillsC, {
        type: 'bar',
        data: {
          labels: skillData.map(s => s.skill),
          datasets: [{
            label: 'Frequency',
            data: skillData.map(s => s.frequency),
            backgroundColor: COLORS.red,
            borderWidth: 0,
            barPercentage: 0.65
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { beginAtZero: true, grid: subtleGrid, ticks: { stepSize: 1, precision: 0, font: { size: 10 } } },
            y: { grid: { display: false }, ticks: { font: { size: 10 } } }
          },
          plugins: { legend: { display: false }, tooltip: tooltipStyle }
        }
      });
    }
  }

  // Run after DOM + Chart.js are both ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
