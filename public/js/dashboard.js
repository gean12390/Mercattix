// Menu lateral ativo
const menuItems = document.querySelectorAll('.sidebar nav ul li');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Simulando dados em tempo real (futuramente via API)
const updateCards = () => {
  document.querySelectorAll('.card p')[0].textContent = 'R$ ' + (10000 + Math.random() * 10000).toFixed(2);
  document.querySelectorAll('.card p')[1].textContent = Math.floor(Math.random() * 100 + 50);
  document.querySelectorAll('.card p')[2].textContent = Math.floor(Math.random() * 30 + 20) + ' novos';
};
setInterval(updateCards, 5000); // Atualiza a cada 5s

// ScrollReveal animações
ScrollReveal({
  reset: false,
  distance: '30px',
  duration: 700,
  delay: 100
});

ScrollReveal().reveal('.header, .card, .chart', {
  origin: 'bottom',
  interval: 100
});
