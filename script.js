document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript cargado y ejecutándose correctamente.");

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        fetch('https://formspree.io/f/movadybv', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                document.getElementById('response-message').textContent = '¡Mensaje enviado con éxito!';
                form.reset();
            } else {
                document.getElementById('response-message').textContent = 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.';
            }
        }).catch(error => {
            document.getElementById('response-message').textContent = 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.';
        });
    });

    // Minijuego
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    let ballRadius = 10;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        
        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }
        
        x += dx;
        y += dy;
    }

    setInterval(draw, 10);
});
