import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Le nom, l\'email et le message sont requis.' },
        { status: 400 }
      );
    }

    let transporter;

    // Si les identifiants SMTP sont fournis dans .env.local
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Configuration par défaut pour Gmail ou autre SMTP défini
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      // Pour les tests en local sans variables d'environnement
      console.log('Utilisation d\'un compte de test Ethereal car EMAIL_USER n\'est pas défini...');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Le mail sera envoyé au propriétaire du site
    // S'il n'y a pas de variables env, on simule l'envoi vers un email de test
    const targetEmail = process.env.RECEIVER_EMAIL || 'assanegassama1999@gmail.com';

    const mailOptions = {
      from: `"${name}" <${email}>`, // Attention, avec certains SMTP (comme Gmail), le 'from' est toujours forcé à être EMAIL_USER, donc on le met dans le 'replyTo'
      to: targetEmail,
      replyTo: email,
      subject: `Nouveau message depuis le portfolio: ${subject || 'Sans objet'}`,
      text: `Vous avez reçu un nouveau message depuis votre formulaire de contact.\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Nouveau message depuis votre portfolio</h2>
          <p><strong>De:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    if (!process.env.EMAIL_USER) {
      console.log('Message envoyé ! URL de prévisualisation: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}
