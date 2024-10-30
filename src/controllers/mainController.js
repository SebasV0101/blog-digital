import express from 'express';

const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.render('home', { title: 'Página principal', footer: 'Derechos reservados 2024' });
});

// Ruta para la página "Consejos de cuidado"
router.get('/consejos', (req, res) => {
    res.render('consejos', { title: 'Consejos de cuidado', footer: 'Derechos reservados 2024' });
});

// Ruta para la página "Experiencias personales"
router.get('/experiencias', (req, res) => {
    res.render('experiencias', { title: 'Experiencias personales', footer: 'Derechos reservados 2024'});
});

// Ruta para la página "Preguntas frecuentes"
router.get('/preguntas', (req, res) => {
    res.render('preguntas', { title: 'Preguntas frecuentes', footer: 'Derechos reservados 2024' });
});

// Ruta para la página "Cuentanos tu historia"
router.get('/historia', (req, res) => {
    res.render('historia', { title: 'Cuentanos tu historia', footer: 'Derechos reservados 2024' });
});

// Ruta para la página "legalizacion"
router.get('/legalizacion', (req, res) => {
    res.render('legalizacion', { title: 'Cuentanos tu historia', footer: 'Derechos reservados 2024' });
});

// Ruta para enviar correo electronico
router.post('/sendEmail', (req, res) => {
    
});


export default router;