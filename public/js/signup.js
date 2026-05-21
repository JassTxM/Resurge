function checkStrength(val) {
    const segs = ['seg1','seg2','seg3','seg4'].map(id => document.getElementById(id));
    const hint = document.getElementById('sHint');
    const levels = [
        { test: v => v.length >= 4,  col: 'var(--accent-red)',    lbl: 'Weak' },
        { test: v => v.length >= 7,  col: 'var(--accent-orange)', lbl: 'Fair' },
        { test: v => v.length >= 10 && /[A-Z]/.test(v), col: 'var(--accent-yellow)', lbl: 'Good' },
        { test: v => v.length >= 12 && /[A-Z]/.test(v) && /\d/.test(v) && /[^A-Za-z0-9]/.test(v), col: 'var(--accent-green)', lbl: 'Strong' }
    ];
    segs.forEach(s => s.style.background = 'var(--border-color)');
    hint.textContent = '';
    if (!val) return;
    let score = 0;
    for (const l of levels) { if (l.test(val)) score++; }
    const active = levels[score - 1];
    for (let i = 0; i < score; i++) segs[i].style.background = active.col;
    hint.textContent = active.lbl;
    hint.style.color = active.col;
}

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const pwd  = document.getElementById('password').value;
            const conf = document.getElementById('confirmPassword');
            
            if (pwd !== conf.value) {
                conf.style.borderColor = 'var(--accent-red)';
                conf.style.boxShadow   = '3px 3px 0 0 var(--accent-red)';
                conf.focus();
                return;
            }
            conf.style.borderColor = '';
            conf.style.boxShadow   = '';
            
            const btn = document.getElementById('signupSubmitBtn');
            const originalBtnHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> &nbsp;Creating account…';
            btn.disabled = true;
            
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, email, password: pwd })
                });
                const data = await response.json();
                
                if (response.ok) {
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> &nbsp;Account Created!';
                    btn.style.cssText += 'background:var(--accent-green);border-color:var(--accent-green);box-shadow:none;transform:none;';
                    setTimeout(() => window.location.href = '/logIn', 1500);
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
