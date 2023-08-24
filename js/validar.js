const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    valida(input);
  });
});

const tipoDeError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajeDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  telefono: {
    valueMissing: "El campo número de teléfono no puede estar vacío",
    patternMismatch: "El formato requerido es xxxxxxxxxx 10 números",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío",
    customError: "Debe contener máximo 50 caracteres",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
    customError: "Debe contener máximo 300 caracteres",
  },
};

function mostrarMensajeDeError(tipoDeInput, validity) {
  let mensaje = "";
  tipoDeError.forEach((error) => {
    if (validity[error]) {
      mensaje = mensajeDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}

const validadores = {
  nombre: (input) => validarNombre(input),
  email: (input) => validarCorreoElectronico(input),
  telefono: (input) => validarTelefono(input),
  asunto: (input) => validarAsunto(input),
  mensaje: (input) => validarMensaje(input),
};

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  const mensaje = mostrarMensajeDeError(tipoDeInput, input.validity);

  if (input.validity.valid) {
    ocultarError(input);
  } else {
    mostrarError(input, mensaje);
  }
}

function mostrarError(inputElement, mensaje) {
  const errorElement = inputElement.parentElement.querySelector(".contacto-message-error");
  errorElement.style.display = "block";
  errorElement.innerText = mensaje;
  inputElement.parentElement.classList.add("contactos__informacion-input--invalid");
}

function ocultarError(inputElement) {
  const errorElement = inputElement.parentElement.querySelector(".contacto-message-error");
  errorElement.style.display = "none";
  inputElement.parentElement.classList.remove("contactos__informacion-input--invalid");
}

// Asegúrate de implementar las funciones de validación para cada campo
function validarNombre(input) {
  // Código para validar el campo Nombre y Apellido
}

function validarCorreoElectronico(input) {
  
  }
 
  
function validarTelefono(input) {
  // Código para validar el campo Teléfono
}

function validarAsunto(input) {
  // Código para validar el campo Asunto
}

function validarMensaje(input) {
  // Código para validar el campo Mensaje
}
