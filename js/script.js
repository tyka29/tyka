document.addEventListener('DOMContentLoaded', function() {
    // Carrousel pour faire défiler les miniatures de projets
    const carousel = document.querySelector('.thumbnails');
    const projectThumbnails = carousel.querySelectorAll('.project-thumbnail');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    function scrollLeft() {
        carousel.scrollBy(-200, 0);
    }

    function scrollRight() {
        carousel.scrollBy(200, 0);
    }

    prevButton.addEventListener('click', scrollLeft);
    nextButton.addEventListener('click', scrollRight);

    // Formulaire de contact avec validation des champs
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value === '') {
            alert('Veuillez saisir votre nom');
            return;
        }

        if (emailInput.value === '') {
            alert('Veuillez saisir votre adresse e-mail');
            return;
        }

        if (messageInput.value === '') {
            alert('Veuillez saisir votre message');
            return;
        }

        // Envoyer les données du formulaire au serveur
        // Ajoutez ici votre code pour envoyer les données via une requête AJAX ou une redirection
    });

    // Défilement fluide lors de la navigation vers les sections de la page
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);

            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
