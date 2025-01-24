import nodemailer from 'nodemailer';

export interface MailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async (mailOptions: MailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.CORPORATE_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const fullMailOptions = {
    from: process.env.CORPORATE_EMAIL,
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
