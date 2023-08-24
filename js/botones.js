function redireccionarRepositorioChallenge() {
    window.location.href = "https://github.com/arlenayala/challengeone5codificador.v2";
  }

  function redireccionarDemoChallenge() {
    window.location.href = "https://arlenayala.github.io/challengeone5codificador.v2/"; 
  }


  function redireccionarRepositorioFotografia() {
    window.location.href = "https://github.com/arlenayala/pagina-web-fotografia";
  }

  function redireccionarDemoFotografia() {
    window.location.href = " https://arlenayala.github.io/pagina-web-fotografia/"; 
  }
  


// app.js
const form = document.querySelector('.contactos__informacion');
const submitButton = form.querySelector('.contactos__informacion-enviar');
const inputs = form.querySelectorAll('input, textarea');

function validarFormulario() {
  let formularioValido = true;

  inputs.forEach(input => {
    if (!input.validity.valid) {
      formularioValido = false;
      return;
    }
  });

  return formularioValido;
}

inputs.forEach(input => {
  input.addEventListener('input', validarFormulario);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validarFormulario()) {
    mostrarMensaje();
    form.reset();
  }
});

function mostrarMensaje() {
  const mensajeEnviado = document.querySelector('[data-form-enviado]');
  mensajeEnviado.style.display = 'block';

  setTimeout(() => {
    mensajeEnviado.style.display = 'none';
  }, 3000);
  
}
