document.addEventListener('DOMContentLoaded', () => {
    
    // =============================================================
    // CÓDIGO EXISTENTE: Intersection Observer para la navegación
    // =============================================================
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

    // =============================================================
    // CÓDIGO NUEVO: Funcionalidad del Modal de Imágenes
    // =============================================================
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image-content');
    const closeBtn = document.querySelector('.modal-close');
    const imageContainers = document.querySelectorAll('.captura-container');

    // Función para abrir el modal
    function openModal(e) {
        modal.style.display = 'flex';
        const imageSrc = e.currentTarget.querySelector('img').src;
        modalImg.src = imageSrc;
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Añadir el evento de click a cada contenedor de imagen
    imageContainers.forEach(container => {
        container.addEventListener('click', openModal);
    });

    // Añadir evento de click al botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Cerrar el modal si se hace click fuera de la imagen
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar el modal con la tecla 'Escape'
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});