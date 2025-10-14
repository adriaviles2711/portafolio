document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.secciones, #informacion');
    const navLinks = document.querySelectorAll('#navegador-izq a');

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.removeAttribute('id');
                });

                const activeId = entry.target.id;
                const activeLink = document.querySelector(`#navegador-izq a[href="#${activeId}"]`);
                
                if (activeLink) {
                    activeLink.setAttribute('id', 'active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});