// Récupérer les données du fichier JSON
fetch('db.json')
.then(response => response.json())
.then(data => {
  // Utiliser les données pour générer les miniatures de projet
  const projectsContainer = document.querySelector('.thumbnails');
  data.forEach(project => {
    const projectThumbnail = document.createElement('div');
    projectThumbnail.classList.add('project-thumbnail');
    projectThumbnail.innerHTML = `
      <img src="${project.image}" alt="${project.alt}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Compétences :</strong> ${project.competences}</p>
      <a href="${project.link}">En savoir plus</a>
    `;
    projectsContainer.appendChild(projectThumbnail);
  });
});

// Fonction pour rediriger vers une autre page
function redirectToPage(pageUrl) {
window.location.href = pageUrl;
}


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

      const title = document.createElement('h5');
      title.textContent = card.title;

      const description = document.createElement('p');
      description.textContent = card.description;

      const description2 = document.createElement('p');
      description2.textContent = card.description2;

      const link = document.createElement('a');
      link.href = '#'; // Ajoutez ici le lien approprié pour chaque carte
      link.textContent = 'Voir plus';

      cardElement.appendChild(image);
      cardElement.appendChild(title);
      cardElement.appendChild(description);
      cardElement.appendChild(description2);
      cardElement.appendChild(link);

      cardsContainer.appendChild(cardElement);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des données vcard.json :', error);
  });


// Appeler la fonction pour charger les données au chargement de la page
window.addEventListener('DOMContentLoaded', loadVCardData);


// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
const cartItems = document.getElementById('cart-items');
const total = document.getElementById('total-price');

// Créer un nouvel élément li pour représenter le produit ajouté au panier
const item = document.createElement('li');
item.textContent = `${productName} - $${price.toFixed(2)}`;

// Ajouter l'élément au panier
cartItems.appendChild(item);

// Mettre à jour le total du panier
const currentTotal = parseFloat(total.textContent.substring(7));
const newTotal = currentTotal + price;
total.textContent = `Total: $${newTotal.toFixed(2)}`;
}
// Tableau pour stocker les produits du panier
let cartItems = [];

// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
// Ajouter le produit au tableau cartItems
cartItems.push({ productName, price });

const cartItemsList = document.getElementById('cart-items');
const total = document.getElementById('total-price');

// Créer un nouvel élément li pour représenter le produit ajouté au panier
const item = document.createElement('li');
item.textContent = `${productName} - $${price.toFixed(2)}`;

// Ajouter l'élément au panier
cartItemsList.appendChild(item);

// Mettre à jour le total du panier
const newTotal = calculateTotal();
total.textContent = `Total: $${newTotal.toFixed(2)}`;
}

// Fonction pour calculer le total du panier
function calculateTotal() {
let totalPrice = 0;
for (let i = 0; i < cartItems.length; i++) {
totalPrice += cartItems[i].price;
}
return totalPrice;
}

// Fonction pour passer à la caisse
function checkout() {
// Effectuer les étapes nécessaires pour passer à la caisse (par exemple, rediriger vers une page de paiement)
// Réinitialiser le panier
cartItems = [];
const cartItemsList = document.getElementById('cart-items');
const total = document.getElementById('total-price');
cartItemsList.innerHTML = '';
total.textContent = 'Total: $0.00';
}

// Appeler la fonction pour charger les données au chargement de la page
window.addEventListener('DOMContentLoaded', loadVCardData);


window.addEventListener('DOMContentLoaded', function() {
  var phoneImages = document.querySelectorAll('.phone .contact-img');
  var currentIndex = 0;
  var interval = 10000; // Délai de 10 secondes en millisecondes

  function changeImage() {
    phoneImages.forEach(function(image) {
      image.classList.add('hidden');
    });

    currentIndex = (currentIndex + 1) % phoneImages.length;

    phoneImages[currentIndex].classList.remove('hidden');
  }

  // Exécute la fonction de changement d'image toutes les 10 secondes
  setInterval(changeImage, interval);
});

