document.addEventListener('DOMContentLoaded', function() {
  const btnEditar = document.querySelector('button.bg-\\[\\#e9c68d\\]');
  const campos = document.querySelectorAll('.max-w-md .flex-col.sm\\:flex-row');

  let editando = false;

  btnEditar.addEventListener('click', function() {
    if (!editando) {
      campos.forEach(div => {
        const spanValor = div.querySelectorAll('span')[1];
        if (!spanValor) return;
        const valor = spanValor.textContent;
        const campo = spanValor.previousElementSibling.textContent.replace(':','').trim().toLowerCase();
        let input;
        if (campo === 'curiosidades') {
          input = document.createElement('textarea');
          input.className = 'text-yellow-800 w-full rounded border border-[#e9c68d] px-2 py-1';
          input.value = valor;
        } else {
          input = document.createElement('input');
          input.type = 'text';
          input.className = 'text-yellow-800 w-full rounded border border-[#e9c68d] px-2 py-1';
          input.value = valor;
        }
        input.setAttribute('data-campo', campo);
        spanValor.replaceWith(input);
      });
      btnEditar.textContent = 'Guardar';
      editando = true;
    } else {
      campos.forEach(div => {
        const input = div.querySelector('input,textarea');
        if (!input) return;
        const valor = input.value;
        const span = document.createElement('span');
        span.className = 'text-yellow-800';
        span.textContent = valor;
        input.replaceWith(span);
      });
      btnEditar.textContent = 'Editar Perfil';
      editando = false;
    }
  });
});