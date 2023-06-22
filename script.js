//aquí el programa selecciona un número al azar utilizando el método random y lo redondeda hacia abajo utilizando el método floor
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");

let mensaje = document.getElementById("mensaje");

let intento = document.getElementById("intento");

let intentos = 0;

function chequearResultado() {
  intentos++;
  let numeroIngresado = parseInt(numeroEntrada.value);
  intento.textContent = intentos;
  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "por favor, introduce un número entre 1 y 100";
    return;
  }
  if (numeroIngresado == numeroAzar) {
    mensaje.textContent = "Felicitaciones, has adivinado el número!";
    mensaje.style.color = "green";
    numeroEntrada.disabled = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "Por favor, ingrese un número más alto";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Por favor,ingrese un número más bajo";
    mensaje.style.color = "blue";
  }
}
