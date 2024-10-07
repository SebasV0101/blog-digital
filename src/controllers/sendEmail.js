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
router.post('/send-email', async (req, res) => {
  const { name, email, phone, story } = req.body;

  // Opciones del correo
  const mailOptions = {
    from: process.env.EMAIL_USER, // Remitente (puede ser el mismo del auth)
    to: email, // Destinatario
    subject: `Historia enviada por ${name}`, // Asunto del correo
    text: `Hola soy ${name},
    
Esta es mi historia: ${story}

Número telefónico: ${phone}
Correo electrónico: ${email}`, // Contenido del cuerpo del correo
  };

  try {
    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    // Si el correo se envía correctamente
    res.status(200).json({ message: 'Correo enviado correctamente', info });
  } catch (error) {
    // Si ocurre un error al enviar el correo
    res.status(500).json({ message: 'Error al enviar el correo', error });
  }
});

export default router;