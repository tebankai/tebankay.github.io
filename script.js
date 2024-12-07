// Mostrar la sección activa y ocultar las demás cuando se hace clic en el menú
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target.getAttribute('data-target');

        // Ocultar todas las secciones
        document.querySelectorAll('.content').forEach(section => {
            section.classList.add('hidden'); // Añade la clase 'hidden' a todas las secciones
        });

        // Mostrar la sección correspondiente
        const targetSection = document.getElementById(target);
        targetSection.classList.remove('hidden'); // Elimina la clase 'hidden' de la sección seleccionada

        // Desplazar hacia la sección seleccionada para centrarla
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center' // Esto asegura que la sección se centrará en la ventana visible
        });
    });
});

// Mostrar el botón de "scroll to top" cuando se hace scroll
const scrollTopButton = document.getElementById('scrolltop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopButton.classList.remove('hidden');
    } else {
        scrollTopButton.classList.add('hidden');
    }
});

// Función para desplazarse al inicio
scrollTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carrusel automático de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage() {
    images[currentIndex].style.opacity = 0; // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Incrementa el índice y vuelve al inicio si es necesario
    images[currentIndex].style.opacity = 1; // Muestra la siguiente imagen
}

// Inicia el carrusel
setInterval(changeImage, 2000); // Cambia la imagen cada 2 segundos

