document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'Usuario.html';
});
document.querySelectorAll('button').forEach(btn => {
  if (btn.textContent.includes('Google') || btn.textContent.includes('Facebook')) {
    btn.addEventListener('click', function() {
      window.location.href = 'Usuario.html';
    });
  }
});