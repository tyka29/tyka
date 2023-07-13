const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/envoyer-email', (req, res) => {
  const formData = req.body;
  sendEmail(formData)
    .then(() => {
      console.log("L'e-mail a été envoyé avec succès.");
      res.status(200).send("E-mail envoyé avec succès");
      // Ajouter une alerte à l'écran pour indiquer que l'e-mail a été envoyé avec succès
      res.send('<script>alert("E-mail envoyé avec succès");</script>');
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
      // Ajouter une alerte à l'écran pour indiquer qu'il y a eu une erreur lors de l'envoi de l'e-mail
      res.send('<script>alert("Erreur lors de l\'envoi de l\'e-mail");</script>');
    });
});




app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
