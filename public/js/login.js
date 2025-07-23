ScrollReveal().reveal('.sr-fade', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    easing: 'ease-out',
    interval: 100,
    reset: false
});

const form = document.getElementById("loginForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        email: form.email.value,
        password: form.password.value
    };
    
      try {
          const response = await fetch("/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Login realizado com sucesso!");
                window.location.href = "/dashboard";
        } else {
          const res = await response.json();
          alert(res.message || "Erro ao fazer login.");
        }
    } catch (err) {
        alert("Erro de conexão com o servidor.");
        console.error(err);
    }
});