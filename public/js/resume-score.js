document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('file-upload');
    const fileStatus  = document.getElementById('file-status');
    const scanBtn     = document.getElementById('scan-btn');
    const jdInput     = document.getElementById('jd-input');

    if (uploadInput && fileStatus) {
        uploadInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileStatus.innerHTML = `<span style="color: var(--accent-blue); font-weight: 700;">${e.target.files[0].name}</span>`;
            } else {
                fileStatus.innerHTML = `Click to upload <strong>Resume PDF</strong>`;
            }
        });
    }

    if (scanBtn) {
        scanBtn.addEventListener('click', async () => {
            if (!uploadInput || uploadInput.files.length === 0) {
                alert('Please upload a resume first.');
                return;
            }

            const file = uploadInput.files[0];
            const jd   = jdInput ? jdInput.value : '';
            const formData = new FormData();
            formData.append('resume', file);
            formData.append('jobDescription', jd);

            const originalContent = scanBtn.innerHTML;
            scanBtn.innerHTML = `<span>Analyzing... <i class="fa-solid fa-spinner fa-spin"></i></span>`;
            scanBtn.disabled = true;

            try {
                const response = await fetch('/api/ats/analyze', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to process resume');
                }

                const data = await response.json();

                const scoreNum = document.getElementById('score-num');
                if (scoreNum) scoreNum.textContent = `${data.matchPct}`;

                const keywordPct = document.getElementById('keyword-pct');
                if (keywordPct) keywordPct.textContent = `${data.keywordPct}%`;

                const keywordProgress = document.getElementById('keyword-progress');
                if (keywordProgress) keywordProgress.style.width = `${data.keywordPct}%`;

                const formattingPct = document.getElementById('formatting-pct');
                if (formattingPct) formattingPct.textContent = `${data.formattingPct}%`;

                const formattingProgress = document.getElementById('formatting-progress');
                if (formattingProgress) formattingProgress.style.width = `${data.formattingPct}%`;

                const keywordContainer = document.getElementById('keyword-chips');
                if (keywordContainer) {
                    keywordContainer.innerHTML = '';
                    if (data.keywords && data.keywords.length > 0) {
                        data.keywords.forEach(kw => {
                            const span = document.createElement('span');
                            span.style.cssText = 'display:inline-block;padding:4px 12px;border:1.5px solid var(--border-color);font-size:.75rem;font-weight:700;color:var(--text-secondary);letter-spacing:.04em;margin:3px;';
                            span.textContent = kw;
                            keywordContainer.appendChild(span);
                        });
                    } else {
                        keywordContainer.innerHTML = '<span style="color:var(--text-muted);font-size:.85rem;">No significant keywords found.</span>';
                    }
                }

                const roadmapContainer = document.getElementById('roadmap-list');
                if (roadmapContainer) {
                    roadmapContainer.innerHTML = '';
                    if (data.roadmap && data.roadmap.length > 0) {
                        data.roadmap.forEach(rm => {
                            const li = document.createElement('li');
                            li.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:12px 16px;border:1.5px solid var(--border-color);margin-bottom:8px;font-size:.82rem;color:var(--text-secondary);';
                            li.innerHTML = `<span style="color:var(--accent-green);font-weight:700;flex-shrink:0;">→</span><span>${rm}</span>`;
                            roadmapContainer.appendChild(li);
                        });
                    } else {
                        roadmapContainer.innerHTML = '<li style="color:var(--text-muted);font-size:.85rem;">No improvements suggested.</li>';
                    }
                }

                const reviewBox = document.getElementById('review-box');
                if (reviewBox) {
                    reviewBox.style.cssText = 'font-size:.85rem;color:var(--text-secondary);line-height:1.8;';
                    reviewBox.textContent = data.review || 'No detailed review available.';
                }

                const improvementScoreBox = document.getElementById('improvement-score-num');
                if (improvementScoreBox) improvementScoreBox.textContent = `${data.improvementScore}%`;

                const missingSkillsBox = document.getElementById('missing-skills-box');
                if (missingSkillsBox) {
                    missingSkillsBox.innerHTML = '';
                    if (data.missingSkills && data.missingSkills.length > 0) {
                        data.missingSkills.forEach(skill => {
                            const span = document.createElement('span');
                            span.style.cssText = 'display:inline-block;padding:4px 12px;border:1.5px solid var(--accent-orange);color:var(--accent-orange);font-size:.75rem;font-weight:700;letter-spacing:.04em;margin:3px;';
                            span.textContent = skill;
                            missingSkillsBox.appendChild(span);
                        });
                    } else {
                        missingSkillsBox.innerHTML = '<span style="color:var(--accent-green);font-size:.85rem;">No missing skills detected!</span>';
                    }
                }

                const insightsArea = document.getElementById('insights-area');
                if (insightsArea) insightsArea.classList.remove('hidden');

                const resultsArea = document.getElementById('results-area');
                if (resultsArea) resultsArea.scrollIntoView({ behavior: 'smooth' });

            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during analysis: ' + error.message);
            } finally {
                scanBtn.innerHTML = originalContent;
                scanBtn.disabled = false;
            }
        });
    }
});
