import express from 'express';
import { config } from 'dotenv';
import nodemailer from 'nodemailer';

const router = express.Router();
config();

// Transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Se puede utilizar otro servicio como Yahoo, Outlook, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

// Ruta para enviar correos electrónicos
router.post('/send-suscription', async (req, res) => {
  const { email } = req.body;

  // Opciones del correo
  const mailOptions = {
    from: process.env.EMAIL_USER, // Remitente (puede ser el mismo del auth)
    to: process.env.EMAIL_USER, // Destinatario
    subject: `Suscripcion nueva`, // Asunto del correo
    text: `Quiero recibir novedades a mi correo ${email}`, // Contenido del cuerpo del correo
  };

  try {
    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    // Si el correo se envía correctamente
    res.status(200).json({ message: 'Suscripcion exitosa', info });
  } catch (error) {
    // Si ocurre un error al enviar el correo
    res.status(500).json({ message: 'Error al suscribirte', error });
  }
});

export default router;