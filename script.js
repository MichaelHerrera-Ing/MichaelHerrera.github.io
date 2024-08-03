// Animación de bienvenida
document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.intro h2');
    introText.style.opacity = 0;
    introText.style.transition = 'opacity 2s';
    setTimeout(() => {
        introText.style.opacity = 1;
    }, 500);
});

// EmailJS integration
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Mensaje enviado!');
        }, function(error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
});
