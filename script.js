// Scroll animations
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollTop = window.pageYOffset;

    sections.forEach(section => {
        const offset = section.offsetTop - window.innerHeight + 100;
        if (scrollTop > offset) {
            section.classList.add('visible');
        }
    });
});

// Add initial classes for animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});
