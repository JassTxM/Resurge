document.addEventListener('DOMContentLoaded', () => {
    const cursorRing = document.getElementById('cursor-ring');
    if (cursorRing) {
        let mouseX = -100, mouseY = -100;
        let curX = -100, curY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const speed = 0.18;
            curX += (mouseX - curX) * speed;
            curY += (mouseY - curY) * speed;
            cursorRing.style.left = curX + 'px';
            cursorRing.style.top  = curY + 'px';
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label, .faq-button, .bar-col, .rsg-card, .feature-card, .workflow-card, .security-chip');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-hover'));
        });

        document.addEventListener('mousedown', () => cursorRing.classList.add('cursor-click'));
        document.addEventListener('mouseup',   () => cursorRing.classList.remove('cursor-click'));

        document.addEventListener('mouseleave', () => { cursorRing.style.opacity = '0'; });
        document.addEventListener('mouseenter', () => { cursorRing.style.opacity = '1'; });
        
        // Re-init for lazy elements
        setTimeout(() => {
            const all = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
            all.forEach(el => {
                el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-hover'));
            });
        }, 1000);
    }
});
