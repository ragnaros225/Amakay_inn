const slides = document.querySelectorAll('.carrusel-slide');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
const indicadores = document.querySelectorAll('.carrusel-indicadores .indicador');
let current = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('activo', i === idx);
    slide.style.opacity = i === idx ? '1' : '0';
  });
  indicadores.forEach((ind, i) => {
    ind.classList.toggle('activo', i === idx);
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

indicadores.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    current = i;
    showSlide(current);
  });
});

// Inicializa opacidad
slides.forEach((slide, i) => {
  slide.style.transition = 'opacity 0.5s';
  slide.style.opacity = i === 0 ? '1' : '0';
});