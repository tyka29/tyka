const nodemailer = require('nodemailer');

// Configuration du transporteur d'e-mail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Fonction pour envoyer l'e-mail
function sendEmail(formData, qrCodeImageURL) {
  return new Promise((resolve, reject) => {
    const { firstName, lastName, email, phone, mobile, website, company, position, address, postalCode, city } = formData;

    // Construire le corps de l'e-mail
    const emailContent = `
      <h1>Nouveau formulaire de contact</h1>
      <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
      <p><strong>E-mail :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p><strong>Mobile :</strong> ${mobile}</p>
      <p><strong>Site Web :</strong> ${website}</p>
      <p><strong>Entreprise :</strong> ${company}</p>
      <p><strong>Poste :</strong> ${position}</p>
      <p><strong>Adresse :</strong> ${address}</p>
      <p><strong>Code postal :</strong> ${postalCode}</p>
      <p><strong>Ville :</strong> ${city}</p>
      <img src="${qrCodeImageURL}" alt="QR Code">
    `;

    // Configurer les options de l'e-mail
    const mailOptions = {
      from: email, // Adresse e-mail de l'expéditeur
      to: 'contact.tykadesign@gmail.com', // Adresse e-mail du destinataire
      replyTo: email, // Adresse e-mail de réponse
      subject: 'Nouveau formulaire de contact',
      html: emailContent
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        reject(error);
      } else {
        console.log('E-mail envoyé:', info.messageId);
        resolve(info);
      }
    });
  });
}

module.exports = sendEmail;
