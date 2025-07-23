ScrollReveal().reveal('.sr-fade', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    easing: 'ease-out',
    interval: 100,
    reset: false
});

const form = document.getElementById("registerForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        confirmPassword: form.confirmPassword.value,
        storeName: form.storeName.value,
        cnpj: form.cnpj.value,
        phone: form.phone.value,
        role: form.role.value
      };

      const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      });
      
      if (response.ok) {
          alert("Cadastro realizado com sucesso!");
          window.location.href = "/login";
        } else {
        const res = await response.json();
        alert(res.message || "Erro ao cadastrar.");
    }
});