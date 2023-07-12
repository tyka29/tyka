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
  })
  .catch(error => {
    console.error('Erreur lors du chargement des données db.json :', error);
  });

// Gestion du changement d'image pour le carrousel du téléphone
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
