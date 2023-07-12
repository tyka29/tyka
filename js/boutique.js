// Sélectionner le conteneur des cartes
const cardsContainer = document.getElementById('vcard');

// Charger les données depuis le fichier JSON
fetch('vcard.json')
  .then(response => response.json())
  .then(data => {
    // Générer les cartes à partir des données
    data.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card-title');

      const image = document.createElement('img');
      image.src = card.image;
      image.alt = card.alt;

      cardElement.appendChild(image);

      cardsContainer.appendChild(cardElement);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des données vcard.json :', error);
  });

  const sendEmail = require('../back/sendEmail');
