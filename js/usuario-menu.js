// Mostrar/ocultar menú al hacer click en User
const userMenuBtn = document.getElementById('userMenuBtn');
const userMenu = document.getElementById('userMenu');
document.addEventListener('click', function(e) {
  if (userMenuBtn.contains(e.target)) {
    userMenu.classList.toggle('hidden');
  } else if (!userMenu.contains(e.target)) {
    userMenu.classList.add('hidden');
  }
});