// Seleccionar todos los enlaces dentro del navegador izquierdo
const navLinks = document.querySelectorAll('#navegador-izq a');

// Recorrer cada enlace para añadirle un "detector de clics" (event listener)
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        // Buscar si ya existe un enlace con id="active" y quitárselo
        const currentActive = document.querySelector('#navegador-izq a#active');
        if (currentActive) {
            currentActive.removeAttribute('id');
        }

        // Añadir el id="active" al enlace que acabamos de clicar
        this.setAttribute('id', 'active');
    });
});