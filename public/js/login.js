document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('metricCount');
    if (el) {
        const target = 4832;
        const duration = 1600;
        const startTime = performance.now();
        function update(ts) {
            const prog = Math.min((ts - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - prog, 3);
            el.textContent = Math.round(ease * target).toLocaleString();
            if (prog < 1) requestAnimationFrame(update);
        }
        setTimeout(() => requestAnimationFrame(update), 500);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const btn = document.getElementById('loginSubmitBtn');
            const originalBtnHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> &nbsp;Authenticating…';
            btn.disabled = true;
            
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                
                if (response.ok) {
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> &nbsp;Logged In';
                    btn.style.cssText += 'background:var(--accent-green);border-color:var(--accent-green);box-shadow:none;transform:none;';
                    setTimeout(() => window.location.href = '/', 1000);
                } else {
                    alert('Error: ' + data.error);
                    btn.innerHTML = originalBtnHtml;
                    btn.disabled = false;
                }
            } catch (err) {
                alert('An error occurred. Please try again.');
                console.error(err);
                btn.innerHTML = originalBtnHtml;
                btn.disabled = false;
            }
        });
    }
});
