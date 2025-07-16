ScrollReveal({ reset: false, distance: '40px', duration: 900, easing: 'ease-in-out', delay: 100 });

ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-img', { origin: 'right' });
ScrollReveal().reveal('.section h3', { origin: 'bottom' });
ScrollReveal().reveal('.card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.benefits li', { interval: 150, origin: 'left' });
ScrollReveal().reveal('.cta h3', { origin: 'top' });
ScrollReveal().reveal('.btn-primary', { origin: 'bottom' });

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Por favor, preencha todos os campos.";
        return;
    }
    
    try {
      const response = await fetch("/contato", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        contactForm.reset();
    } else {
        alert("Erro ao enviar. Tente novamente.");
    }
} catch (error) {
    console.error(error);
    alert("Erro ao conectar com o servidor.");
    }
});