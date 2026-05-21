document.addEventListener('DOMContentLoaded', () => {
    const snapMain = document.getElementById('snap-main');
    if (snapMain) {
        document.documentElement.classList.add('snap-enabled');
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
        document.documentElement.style.height = '100%';
        snapMain.style.height = '100vh';
        snapMain.style.overflowY = 'scroll';
        snapMain.style.scrollSnapType = 'y mandatory';
        snapMain.style.scrollBehavior = 'smooth';
    }

    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if (revealEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { root: snapMain || null, rootMargin: '-5% 0px -5% 0px', threshold: 0.15 });
        revealEls.forEach(el => observer.observe(el));
    }

    const roadmapSection = document.getElementById('roadmap-section');
    if (roadmapSection) {
        const steps = roadmapSection.querySelectorAll('.roadmap-step');
        const rmObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    steps.forEach(s => s.classList.add('rmap-visible'));
                } else {
                    steps.forEach(s => s.classList.remove('rmap-visible'));
                }
            });
        }, { root: snapMain || null, threshold: 0.15 });
        rmObserver.observe(roadmapSection);
    }

    const perfMeters = document.getElementById('perf-meters');
    if (perfMeters) {
        const fills = perfMeters.querySelectorAll('.perf-bar-fill');
        const pmObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fills.forEach(f => { f.style.width = (f.dataset.width || 0) + '%'; });
                } else {
                    fills.forEach(f => { f.style.width = '0'; });
                }
            });
        }, { root: snapMain || null, threshold: 0.2 });
        pmObserver.observe(perfMeters);
    }
    
    const typingWord = document.getElementById('typing-word');
    if (typingWord) {
        const words = ['Visualizing', 'Analyzing'];
        let wordIdx = 0; let charIdx = 0; let deleting = false;
        const typeSpeed = 90; const deleteSpeed = 55;
        const pauseAfterType = 1800; const pauseAfterDelete = 300;

        function tick() {
            const currentWord = words[wordIdx];
            if (!deleting) {
                charIdx++;
                typingWord.textContent = currentWord.slice(0, charIdx);
                if (charIdx === currentWord.length) {
                    deleting = true;
                    setTimeout(tick, pauseAfterType);
                    return;
                }
                setTimeout(tick, typeSpeed);
            } else {
                charIdx--;
                typingWord.textContent = currentWord.slice(0, charIdx);
                if (charIdx === 0) {
                    deleting = false;
                    wordIdx = (wordIdx + 1) % words.length;
                    setTimeout(tick, pauseAfterDelete);
                    return;
                }
                setTimeout(tick, deleteSpeed);
            }
        }
        setTimeout(tick, 1200);
    }
});
