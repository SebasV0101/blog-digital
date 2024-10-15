// Obtener la URL actual
var currentPath = window.location.pathname;

// Crear un mapeo de rutas a elementos de menú
var menuItems = {
    "/": "inicio",
    "/consejos": "consejos",
    "/experiencias": "experiencias",
    "/preguntas": "preguntas",
    "/historia": "historia"
};

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para agregar la clase 'active'
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    if (menuItems[currentPath]) {
        const element = document.getElementById(menuItems[currentPath]);
        if (element) {
            element.classList.add('active');
        }
    }
});