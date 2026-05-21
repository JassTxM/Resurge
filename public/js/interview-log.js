

(function () {
    'use strict';

    document.documentElement.classList.add('snap-enabled');

    const startBtn       = document.getElementById('il-start-btn');
    const formSection    = document.getElementById('il-form-section');
    const snapMain       = document.getElementById('snap-main');
    const form           = document.getElementById('il-form');
    const prevBtn        = document.getElementById('il-prev-btn');
    const nextBtn        = document.getElementById('il-next-btn');
    const submitBtn      = document.getElementById('il-submit-btn');
    const pageIndicator  = document.getElementById('il-page-indicator');
    const loadingEl      = document.getElementById('il-loading');
    const dashboard      = document.getElementById('il-dashboard');
    const dialogOverlay  = document.getElementById('il-dialog-overlay');
    const dialogBody     = document.getElementById('il-dialog-body');
    const dialogClose    = document.getElementById('il-dialog-close');
    const newAnalysisBtn = document.getElementById('il-new-analysis-btn');
    const showOptional   = document.getElementById('il-show-optional');
    const optionalFields = document.getElementById('il-optional-fields');

    let currentPage = 1;
    const totalPages = 5;

    startBtn.addEventListener('click', () => {
        formSection.scrollIntoView({ behavior: 'smooth' });
    });

    showOptional.addEventListener('click', () => {
        const isVisible = optionalFields.style.display !== 'none';
        optionalFields.style.display = isVisible ? 'none' : 'block';
        showOptional.innerHTML = isVisible
            ? '<i class="fa-solid fa-plus"></i> Optional Fields'
            : '<i class="fa-solid fa-minus"></i> Hide Optional';
    });

    const sliderMap = {
        preparationLevel:     'prepLevelVal',
        technicalSkillRating: 'techRatingVal',
        problemSolvingRating: 'probRatingVal',
        communicationRating:  'commRatingVal',
        behaviouralRating:    'behavRatingVal',
        confidenceRating:     'confRatingVal',
        nervousnessLevel:     'nervRatingVal',
        overallSelfRating:    'selfRatingVal',
    };
    Object.entries(sliderMap).forEach(([id, labelId]) => {
        const slider = document.getElementById(id);
        const label  = document.getElementById(labelId);
        if (slider && label) {
            slider.addEventListener('input', () => { label.textContent = slider.value; });
        }
    });

    function initTagInput(inputId, tagsId, hiddenId, wrapId) {
        const input  = document.getElementById(inputId);
        const tagsEl = document.getElementById(tagsId);
        const hidden = document.getElementById(hiddenId);
        const tags   = [];

        function render() {
            tagsEl.innerHTML = '';
            tags.forEach((tag, i) => {
                const el = document.createElement('span');
                el.className = 'il-tag';
                el.innerHTML = `${tag} <span class="il-tag-remove" data-i="${i}">&times;</span>`;
                tagsEl.appendChild(el);
            });
            hidden.value = tags.join(',');
        }

        tagsEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('il-tag-remove')) {
                tags.splice(Number(e.target.dataset.i), 1);
                render();
            }
        });

        input.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ',') && input.value.trim()) {
                e.preventDefault();
                const val = input.value.trim().replace(/,$/, '');
                if (val && !tags.includes(val)) { tags.push(val); render(); }
                input.value = '';
            }
        });
    }

    initTagInput('coreSkillsInput', 'coreSkillsTags', 'coreSkillsHidden', 'coreSkillsWrap');
    initTagInput('yourSkillsInput',  'yourSkillsTags',  'yourSkillsHidden',  'yourSkillsWrap');

    function updateSteps() {
        document.querySelectorAll('.il-step').forEach(s => {
            const n = Number(s.dataset.step);
            s.classList.toggle('active', n === currentPage);
            s.classList.toggle('done',   n < currentPage);
        });
        document.querySelectorAll('.il-step-line').forEach((line, i) => {
            line.classList.toggle('done', i < currentPage - 1);
        });
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.style.display  = currentPage > 1 ? '' : 'none';
        nextBtn.style.display  = currentPage < totalPages ? '' : 'none';
        submitBtn.style.display = currentPage === totalPages ? '' : 'none';
    }

    function showPage(n) {
        document.querySelectorAll('.il-page').forEach(p => p.classList.remove('active'));
        document.getElementById(`il-page-${n}`).classList.add('active');
        currentPage = n;
        updateSteps();
    }

    function validatePage(n) {
        const page = document.getElementById(`il-page-${n}`);
        const missing = [];

        page.querySelectorAll('[required]').forEach(el => {
            if (!el.value.trim()) {
                missing.push(el.labels?.[0]?.textContent?.replace('*','').trim() || el.name || el.id);
            }
        });

        const requiredRadioNames = new Set();
        page.querySelectorAll('input[type="radio"][required]').forEach(r => {
            requiredRadioNames.add(r.name);
        });
        
        requiredRadioNames.forEach(name => {
            const checked = page.querySelector(`input[type="radio"][name="${name}"]:checked`);
            if (!checked) {
                missing.push(name);
            }
        });

        if (n === 2) {
            const core = document.getElementById('coreSkillsHidden').value;
            const your = document.getElementById('yourSkillsHidden').value;
            if (!core) missing.push('Core Skills Required');
            if (!your) missing.push('Your Skills');
        }

        return missing;
    }

    function showDialog(msg) {
        dialogBody.textContent = msg;
        dialogOverlay.style.display = 'flex';
    }
    dialogClose.addEventListener('click', () => { dialogOverlay.style.display = 'none'; });
    dialogOverlay.addEventListener('click', (e) => {
        if (e.target === dialogOverlay) dialogOverlay.style.display = 'none';
    });

    nextBtn.addEventListener('click', () => {
        const missing = validatePage(currentPage);
        if (missing.length) {
            showDialog(`Please fill in all required fields:\n• ${missing.join('\n• ')}`);
            return;
        }
        if (currentPage < totalPages) showPage(currentPage + 1);
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });

    updateSteps();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const missing = validatePage(5);
        if (missing.length) {
            showDialog(`Please fill in all required fields:\n• ${missing.join('\n• ')}`);
            return;
        }

        const fd = new FormData(form);
        const body = {};
        fd.forEach((v, k) => { body[k] = v; });

        loadingEl.style.display = 'flex';

        try {
            const res = await fetch('/api/interview/analyze', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(body),
            });
            const data = await res.json();

            if (!res.ok || data.error) {
                loadingEl.style.display = 'none';
                showDialog(data.error || 'An error occurred. Please try again.');
                return;
            }

            loadingEl.style.display = 'none';
            renderDashboard(data);
            dashboard.classList.remove('hidden');
            dashboard.scrollIntoView({ behavior: 'smooth' });

        } catch (err) {
            loadingEl.style.display = 'none';
            showDialog('Network error. Please check your connection and try again.');
        }
    });

    newAnalysisBtn.addEventListener('click', () => {
        form.reset();
        document.querySelectorAll('.il-tags').forEach(t => { t.innerHTML = ''; });
        document.querySelectorAll('.il-tag-input-wrap input[type="hidden"]').forEach(h => { h.value = ''; });
        Object.keys(sliderMap).forEach(id => {
            const sl = document.getElementById(id);
            if (sl) { sl.value = sl.getAttribute('value') || 5; }
        });
        Object.entries(sliderMap).forEach(([id, labelId]) => {
            const sl = document.getElementById(id); const lb = document.getElementById(labelId);
            if (sl && lb) lb.textContent = sl.value;
        });
        dashboard.classList.add('hidden');
        destroyCharts();
        showPage(1);
        formSection.scrollIntoView({ behavior: 'smooth' });
    });

    const chartInstances = {};
    function destroyCharts() {
        Object.values(chartInstances).forEach(c => { if (c) c.destroy(); });
        Object.keys(chartInstances).forEach(k => delete chartInstances[k]);
    }

    function scoreColor(v) {
        if (v >= 70) return '#00CC44';
        if (v >= 40) return '#FFD000';
        return '#E8000D';
    }

    function renderDashboard(data) {
        const { scores, proficiency, expectedSkills, distribution, aiFeedback, overallComparison } = data;

        animateCounter('kpi-jobfit-val',  scores.jobFitScore);
        animateCounter('kpi-perf-val',    scores.interviewPerformanceScore);
        animateCounter('kpi-conf-val',    scores.confidenceScore);
        animateCounter('kpi-ready-val',   scores.readinessScore);

        colorKpi('kpi-jobfit', scores.jobFitScore);
        colorKpi('kpi-perf',   scores.interviewPerformanceScore);
        colorKpi('kpi-conf',   scores.confidenceScore);
        colorKpi('kpi-ready',  scores.readinessScore);

        document.getElementById('il-ai-summary').textContent = aiFeedback.summary;
        const strengthsList = document.getElementById('il-strengths-list');
        const concernsList  = document.getElementById('il-concerns-list');
        strengthsList.innerHTML = aiFeedback.strengths.map(s => `<li>${s}</li>`).join('');
        concernsList.innerHTML  = aiFeedback.concerns.map(c => `<li>${c}</li>`).join('');

        const improveEl = document.getElementById('il-improve-list');
        improveEl.innerHTML = aiFeedback.suggestions.map(s => `<li>${s}</li>`).join('');

        const profKeys = [
            { key: 'problemSolving',     label: 'Problem Solving' },
            { key: 'logicalThinking',    label: 'Logical Thinking' },
            { key: 'technicalKnowledge', label: 'Technical Knowledge' },
            { key: 'communication',      label: 'Communication' },
            { key: 'confidence',         label: 'Confidence' },
            { key: 'systemThinking',     label: 'System Thinking' },
        ];
        const profGrid = document.getElementById('il-proficiency-grid');
        const palette = ['#0050FF', '#00CC44', '#7B00FF', '#FF0080', '#FFD000', '#FF5500'];
        
        profGrid.innerHTML = '';
        profKeys.forEach(({ key, label }, index) => {
            const val = proficiency[key] || 0;
            const color = palette[index % palette.length];
            profGrid.innerHTML += `
            <div class="il-prof-item">
                <div class="il-prof-name">${label}</div>
                <div class="il-prof-track">
                    <div class="il-prof-fill" style="background:${color};" data-width="${val}"></div>
                </div>
                <div class="il-prof-pct">${val}%</div>
            </div>`;
        });

        requestAnimationFrame(() => {
            document.querySelectorAll('.il-prof-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
        });

        const skillLabels   = ['Problem Solving','Logical Thinking','Technical','Communication','System Thinking','Debugging'];
        const skillKeys     = ['problemSolving','logicalThinking','technicalKnowledge','communication','systemThinking','debugging'];
        const yourData      = skillKeys.map(k => proficiency[k] || 0);
        const expectedData  = skillKeys.map(k => expectedSkills[k] || 0);

        const radarLabels = ['Technical','Behavioural','Communication','Confidence','Problem Solving'];
        const radarData   = [
            proficiency.technicalKnowledge || 0,
            proficiency.behavioural        || 0,
            proficiency.communication      || 0,
            proficiency.confidence         || 0,
            proficiency.problemSolving     || 0,
        ];
        destroyChart('il-radar-chart');
        chartInstances['radar'] = new Chart(document.getElementById('il-radar-chart'), {
            type: 'radar',
            data: {
                labels: radarLabels,
                datasets: [{
                    label: 'Your Skills',
                    data: radarData,
                    backgroundColor: 'rgba(0,80,255,0.08)',
                    borderColor: '#0050FF',
                    borderWidth: 2,
                    pointBackgroundColor: '#0050FF',
                    pointRadius: 4,
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    r: {
                        min: 0, max: 100,
                        ticks: { stepSize: 25, font: { family: 'JetBrains Mono', size: 10 }, color: '#888' },
                        grid: { color: 'rgba(0,0,0,0.1)' },
                        pointLabels: { font: { family: 'JetBrains Mono', size: 11, weight: '700' }, color: '#444' },
                    }
                }
            }
        });

        destroyChart('il-bar-chart');
        chartInstances['bar'] = new Chart(document.getElementById('il-bar-chart'), {
            type: 'bar',
            data: {
                labels: ['Expected Score', 'Your Score'],
                datasets: [{
                    data: [overallComparison.expectedScore, overallComparison.yourScore],
                    backgroundColor: ['rgba(0,0,0,0.12)', scoreColor(overallComparison.yourScore)],
                    borderColor:     ['#0F0F0F', scoreColor(overallComparison.yourScore)],
                    borderWidth: 2,
                    barThickness: 60,
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: { min: 0, max: 100, ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#888' }, grid: { color: 'rgba(0,0,0,0.06)' } },
                    x: { ticks: { font: { family: 'JetBrains Mono', size: 11, weight: '700' }, color: '#444' }, grid: { display: false } }
                }
            }
        });

        destroyChart('il-pie-chart');
        chartInstances['pie'] = new Chart(document.getElementById('il-pie-chart'), {
            type: 'doughnut',
            data: {
                labels: ['Strong', 'Average', 'Weak'],
                datasets: [{
                    data: [distribution.strong, distribution.average, distribution.weak],
                    backgroundColor: ['#00CC44','#FFD000','#E8000D'],
                    borderColor: ['#fff','#fff','#fff'],
                    borderWidth: 3,
                }]
            },
            options: {
                responsive: true,
                cutout: '55%',
                plugins: { legend: { display: false } }
            }
        });
        document.getElementById('il-pie-legend').innerHTML = [
            { label: 'Strong',  color: '#00CC44', val: distribution.strong },
            { label: 'Average', color: '#FFD000', val: distribution.average },
            { label: 'Weak',    color: '#E8000D', val: distribution.weak },
        ].map(item => `
            <div class="il-pie-legend-item">
                <div class="il-pie-legend-dot" style="background:${item.color};"></div>
                ${item.label} (${item.val}%)
            </div>`).join('');

        destroyChart('il-breakdown-chart');
        chartInstances['breakdown'] = new Chart(document.getElementById('il-breakdown-chart'), {
            type: 'bar',
            data: {
                labels: skillLabels,
                datasets: [{
                    label: 'Your Score',
                    data: yourData,
                    backgroundColor: palette,
                    borderColor:     palette,
                    borderWidth: 1.5,
                    barThickness: 22,
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: { min: 0, max: 100, ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#888' }, grid: { color: 'rgba(0,0,0,0.06)' } },
                    y: { ticks: { font: { family: 'JetBrains Mono', size: 10, weight: '700' }, color: '#444' }, grid: { display: false } }
                }
            }
        });

        destroyChart('il-line-chart');
        chartInstances['line'] = new Chart(document.getElementById('il-line-chart'), {
            type: 'line',
            data: {
                labels: skillLabels,
                datasets: [
                    {
                        label: 'Your Skills',
                        data: yourData,
                        borderColor: '#0050FF',
                        backgroundColor: 'rgba(0,80,255,0.06)',
                        borderWidth: 2.5,
                        pointBackgroundColor: '#0050FF',
                        pointRadius: 5,
                        tension: 0.35,
                        fill: true,
                    },
                    {
                        label: 'Expected Skills',
                        data: expectedData,
                        borderColor: '#888',
                        backgroundColor: 'rgba(136,136,136,0.06)',
                        borderWidth: 2,
                        borderDash: [6, 4],
                        pointBackgroundColor: '#888',
                        pointRadius: 4,
                        tension: 0.35,
                        fill: false,
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: { font: { family: 'JetBrains Mono', size: 11 }, color: '#444', usePointStyle: true, pointStyleWidth: 12 }
                    }
                },
                scales: {
                    y: { min: 0, max: 100, ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#888' }, grid: { color: 'rgba(0,0,0,0.06)' } },
                    x: { ticks: { font: { family: 'JetBrains Mono', size: 9, weight: '700' }, color: '#444', maxRotation: 40 }, grid: { display: false } }
                }
            }
        });
    }

    function destroyChart(canvasId) {
        const existing = Chart.getChart(canvasId);
        if (existing) existing.destroy();
    }

    function animateCounter(id, target) {
        const el = document.getElementById(id);
        if (!el) return;
        let start = 0;
        const duration = 900;
        const step = (timestamp) => {
            if (!step.startTime) step.startTime = timestamp;
            const progress = Math.min((timestamp - step.startTime) / duration, 1);
            el.textContent = Math.round(progress * target);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    function colorKpi(cardId, score) {
        const card = document.getElementById(cardId);
        if (!card) return;
        const valEl = card.querySelector('.il-kpi-val');
        if (valEl) valEl.style.color = scoreColor(score);
    }

})();
