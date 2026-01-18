document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Toggle Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if(menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 2. Scroll Animations (Refined)
    const sections = document.querySelectorAll('section');
    
    // Initial check on load
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
                section.classList.add('fade-in'); // Ensure base class is there
                section.style.opacity = '1';
            }
        });
    }
});
