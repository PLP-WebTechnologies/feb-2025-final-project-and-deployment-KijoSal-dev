document.addEventListener('DOMContentLoaded', () => {
    // Subtle entrance animations (you can expand on these)
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = 0;
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.5s ease-in-out';
            mainContent.style.opacity = 1;
        }, 100);
    }

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#60A5FA';
        });
        link.addEventListener('mouseout', () => {
            if (!link.classList.contains('active')) {
                link.style.color = '#3B82F6';
            }
        });
    });
});