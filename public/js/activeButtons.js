// Obtener la URL actual
var currentPath = window.location.pathname;

// Crear un mapeo de rutas a elementos de menú
var menuItems = {
    "/": "inicio",
    "/consejos": "consejos",
    "/experiencias": "experiencias",
    "/preguntas": "preguntas",
    "/historia": "historia",
    "/legalizacion": "legalizacion"
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

document.getElementById('toggle-button').addEventListener('click', function () {
    const socialIcons = document.getElementById('social-icons');
    socialIcons.classList.toggle('hidden');
    socialIcons.classList.toggle('visible'); // Añade la clase visible

    const arrowIcon = document.getElementById('arrow-icon');
    arrowIcon.classList.toggle('fa-chevron-down'); // Cambia el ícono
    arrowIcon.classList.toggle('fa-chevron-up'); // Cambia el ícono
});