// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); // Chemin vers le fichier sendEmail.js

// Créer une instance de l'application Express
const app = express();

// Configurer les middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Définir la route pour le formulaire
app.post('/envoyer-email', (req, res) => {
  // Récupérer les données du formulaire
  const formData = req.body;

  // Générer l'URL de l'image du QR code
  const qrCodeImageURL = 'URL_de_l_image_du_QR_code';

  // Appeler la fonction pour envoyer l'e-mail
  sendEmail(formData, qrCodeImageURL)
    .then(() => {
      // L'e-mail a été envoyé avec succès, effectuer des actions supplémentaires si nécessaire
      console.log("L'e-mail a été envoyé avec succès.");
      res.status(200).send("E-mail envoyé avec succès");
    })
    .catch((error) => {
      // Une erreur s'est produite lors de l'envoi de l'e-mail
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
