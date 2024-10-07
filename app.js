import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import mainRoutes from './src/controllers/mainController.js'; // Importamos las rutas principales
import sendEmail from './src/controllers/sendEmail.js';
import path from 'path'; // Importa la librería path

const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo actual
const __dirname = path.dirname(__filename); // Obtiene el directorio del archivo actual
const app = express();
config();
const PORT = process.env.PORT || 3000;

// Configuración del motor de plantillas EJS y Express Layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layouts/mainLayout'); // Especifica el layout

// Middleware para analizar cuerpos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para procesar datos del formulario

// Rutas estáticas
app.use(express.static('public'));

// Definición de rutas
app.use('/', mainRoutes); // Usamos las rutas principales
app.use('/api', sendEmail);

app.listen(PORT, () => {
  console.log(`Servidor iniciado: http://localhost:${PORT}`);
});