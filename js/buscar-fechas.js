document.addEventListener('DOMContentLoaded', function() {
  const btnBuscar = document.getElementById('btnBuscar');
  const inputs = document.querySelectorAll('input[type="date"]');
  const fechaEntrada = inputs[0];
  const fechaSalida = inputs[1];

  btnBuscar.addEventListener('click', function(e) {
    e.preventDefault();
    if (fechaEntrada.value && fechaSalida.value) {
      localStorage.setItem('fechaEntrada', fechaEntrada.value);
      localStorage.setItem('fechaSalida', fechaSalida.value);
      window.location.href = 'catalogo.html';
    } else {
      alert('Por favor, selecciona fecha de entrada y salida.');
    }
  });
});

