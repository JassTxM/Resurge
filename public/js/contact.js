document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn  = document.getElementById('contact-submit-btn');
    const btnIcon    = document.getElementById('contact-btn-icon');
    const feedback   = document.getElementById('contact-feedback');

    const showFeedback = (message, isSuccess) => {
        feedback.textContent = message;
        feedback.style.display = 'block';
        feedback.style.padding = '12px 18px';
        feedback.style.borderRadius = '8px';
        feedback.style.marginTop = '12px';
        feedback.style.fontSize = '0.92rem';
        feedback.style.fontWeight = '500';
        if (isSuccess) {
            feedback.style.background = 'rgba(34,197,94,0.12)';
            feedback.style.border = '1px solid rgba(34,197,94,0.35)';
            feedback.style.color = '#4ade80';
        } else {
            feedback.style.background = 'rgba(239,68,68,0.12)';
            feedback.style.border = '1px solid rgba(239,68,68,0.35)';
            feedback.style.color = '#f87171';
        }
    };

    const setLoading = (loading) => {
        submitBtn.disabled = loading;
        if (loading) {
            submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        } else {
            submitBtn.innerHTML = 'Send Message &nbsp;<i class="fa-solid fa-paper-plane" id="contact-btn-icon"></i>';
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.style.display = 'none';

        const email   = form.email.value.trim();
        const subject = form.subject.value.trim();
        const content = form.content.value.trim();

        if (!email || !subject || !content) {
            showFeedback('Please fill in all fields before submitting.', false);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/support/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, subject, content })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                showFeedback(data.message, true);
                form.reset();
            } else {
                showFeedback(data.error || 'Something went wrong. Please try again.', false);
            }
        } catch (err) {
            showFeedback('Network error. Please check your connection and try again.', false);
        } finally {
            setLoading(false);
        }
    });
});
