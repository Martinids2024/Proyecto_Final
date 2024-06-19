// document.getElementById('suma').addEventListener('click', sumar);
// document.getElementById('resta').addEventListener('click', restar);
// document.getElementById('multi').addEventListener('click', multiplicar);
// document.getElementById('div').addEventListener('click', dividir);

// function sumar() {
//   let n1 = parseFloat(document.getElementById('n1').value);
//   let n2 = parseFloat(document.getElementById('n2').value);
//   let resultado = n1 + n2;
//   document.getElementById('resultado').value = resultado;
// }

// function restar() {
//   let n1 = parseFloat(document.getElementById('n1').value);
//   let n2 = parseFloat(document.getElementById('n2').value);
//   let resultado = n1 - n2;
//   document.getElementById('resultado').value = resultado;
// }

// function multiplicar() {
//   let n1 = parseFloat(document.getElementById('n1').value);
//   let n2 = parseFloat(document.getElementById('n2').value);
//   let resultado = n1 * n2;
//   document.getElementById('resultado').value = resultado;
// }

// function dividir() {
//   let n1 = parseFloat(document.getElementById('n1').value);
//   let n2 = parseFloat(document.getElementById('n2').value);
//   if (n2 === 0) {
//     alert('No se puede dividir entre cero');
//   } else {
//     let resultado = n1 / n2;
//     document.getElementById('resultado').value = resultado.toFixed(2);
//   }
// }

// const keyPresses = document.getElementById("key-presses");
// let Code = "";

// document.addEventListener("keypress", (event) => {
//   Code = event.code;
//   keyPresses.textContent = ` ${Code}`;
// });

// document.addEventListener("keyup", () => {
//   keyPresses.textContent = ` ${Code}`;
// });

// const mouseCoordinates = document.getElementById("mouse-coordinates");
// document.addEventListener("mousemove", (event) => {
//   mouseCoordinates.textContent = `Cordanas: ${event.clientX}, ${event.clientY}`;
// });

// const teclasPresionadas = document.getElementById("teclas-presionadas");

// document.addEventListener("keydown", (event) => {
//     const tecla = event.key;
//   const codigoTecla = event.code;
//   teclasPresionadas.textContent += `Teclado: ${tecla} (${codigoTecla}) `;
// });
// document.addEventListener("keyup", () => {
//   teclasPresionadas.textContent;
// });