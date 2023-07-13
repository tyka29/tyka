const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

function sendEmail(formData) {
  return new Promise((resolve, reject) => {
    const { firstName, lastName, email, message } = formData;

    const emailContent = `
      <h1>Formulaire de contact</h1>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>E-mail :</strong> ${email}</p>
    `;

    const mailOptions = {
      from: email, // Utiliser l'adresse e-mail fournie par l'utilisateur comme expéditeur
      to: 'user: process.env.EMAIL_USER',
      subject: 'Formulaire de contact',
      html: emailContent
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        reject(error);
      } else {
        console.log('E-mail envoyé :', info.messageId);
        resolve(info);
      }
    });
  })
    .then(() => {
      console.log('L\'e-mail a été envoyé avec succès.');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      throw error;
    });
}

module.exports = sendEmail;
