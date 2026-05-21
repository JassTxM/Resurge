document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const button  = item.querySelector('.faq-button');
            const content = item.querySelector('.faq-content');

            if (!button) return;

            button.addEventListener('click', () => {
                const isActive = item.classList.contains('active-faq');
                faqItems.forEach(faq => {
                    faq.classList.remove('active-faq');
                    const fc = faq.querySelector('.faq-content');
                    if (fc) fc.style.height = '0px';
                });

                if (!isActive) {
                    item.classList.add('active-faq');
                    if (content) content.style.height = content.scrollHeight + 'px';
                }
            });
        });
    }
});
