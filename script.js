const bar = document.getElementById('bar');
const close = document.getElementById('close'); 
const nav = document.getElementById('navbar');

// Abre el menú al hacer clic en "bar"
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Alterna la clase "active" para mostrar/ocultar el menú
    });
}

// Cierra el menú al hacer clic en "close"
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Remueve la clase "active" para ocultar el menú
    });
}