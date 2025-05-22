document.addEventListener('DOMContentLoaded', function() {
  const entrada = localStorage.getItem('fechaEntrada') || "-";
  const salida = localStorage.getItem('fechaSalida') || "-";
  document.getElementById('fechaEntrada').textContent = "Entrada: " + entrada;
  document.getElementById('fechaSalida').textContent = "Salida: " + salida;
});