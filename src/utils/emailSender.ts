import nodemailer from 'nodemailer';

export interface MailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (mailOptions: MailOptions) => {
  console.log('Enviando correo...');
  // Print vercel env variables
  console.log('Vercel env variables:', process.env);
  
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@urbania-custom.com",
      pass: "UrbaniaInfo2025!!",
    },
    logger: true, // Habilitar logs detallados
    debug: true, // Habilitar modo debug
  });

  const fullMailOptions = {
    from: "info@urbania-custom.com",
    ...mailOptions,
  };

  try {
    await transporter.sendMail(fullMailOptions);
    console.log(`Correo enviado exitosamente a: ${mailOptions.to}`);
  } catch (error) {
    console.error('Error enviando correo:', error);
    throw new Error('No se pudo enviar el correo.');
  }
};
