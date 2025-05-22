document.addEventListener('DOMContentLoaded', function() {
  // Datos de habitaciones (puedes agregar más detalles aquí)
  const habitaciones = [
    {
      nombre: "Habitación Doble",
      img: "img/habitacion.jpg",
      desc: "Espaciosa, con dos camas, baño privado y vista al jardín. Perfecta para amigos o compañeros de viaje.",
      servicios: ["WiFi gratis", "TV cable", "Baño privado", "Vista al jardín"],
      desayuno: true,
      precio: "S/ 180 por noche"
    },
    {
      nombre: "Suite Familiar",
      img: "img/habitacion2.jpg",
      desc: "Ideal para familias, con sala de estar, balcón privado y todas las comodidades para grandes y chicos.",
      servicios: ["WiFi gratis", "TV cable", "Balcón privado", "Sala de estar", "Baño privado"],
      desayuno: true,
      precio: "S/ 320 por noche"
    },
    {
      nombre: "Habitación Matrimonial",
      img: "img/habitacion3.jpg",
      desc: "Ambiente romántico, cama king size, jacuzzi y detalles pensados para parejas.",
      servicios: ["WiFi gratis", "TV cable", "Jacuzzi", "Baño privado"],
      desayuno: false,
      precio: "S/ 250 por noche"
    }
  ];

  // Selección de botones y modal
  const reservarBtns = document.querySelectorAll('button.bg-\\[\\#e9c68d\\]');
  const modal = document.getElementById('modalHabitacion');
  const cerrarModal = document.getElementById('cerrarModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitulo = document.getElementById('modalTitulo');
  const modalDesc = document.getElementById('modalDesc');
  const modalServicios = document.getElementById('modalServicios');
  const modalDesayuno = document.getElementById('modalDesayuno');
  const modalPrecio = document.getElementById('modalPrecio');

  reservarBtns.forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      const hab = habitaciones[idx];
      modalImg.src = hab.img;
      modalTitulo.textContent = hab.nombre;
      modalDesc.textContent = hab.desc;
      modalServicios.innerHTML = hab.servicios.map(s => `<li>• ${s}</li>`).join('');
      modalDesayuno.innerHTML = hab.desayuno
        ? '<span class="text-green-700 font-semibold">Incluye desayuno</span>'
        : '<span class="text-red-700 font-semibold">No incluye desayuno</span>';
      modalPrecio.textContent = hab.precio;
      modal.classList.remove('hidden');
    });
  });

  cerrarModal.addEventListener('click', function() {
    modal.classList.add('hidden');
  });

  // Cierra el modal al hacer click fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});