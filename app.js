// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let amigo_agregado = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
  let nombre = amigo_agregado.value.trim(); // Usar .value para obtener el valor del input

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido");
    return; 
  }

  nombres.push(nombre);
  actualizarAmigos(); 
  amigo_agregado.value = ""; 
}

function actualizarAmigos() {
  let contenidoLista = '';
  for (let i = 0; i < nombres.length; i++) {
    contenidoLista += `<li>${nombres[i]}</li>`;
  }
  listaAmigos.innerHTML = contenidoLista;
}

function sortearAmigo() {
  if (nombres.length < 2) {
    alert('Debe haber al menos 2 amigos para sortear.');
    return;
  }

  let amigosSorteados = [...nombres];
  amigosSorteados.sort(() => Math.random() - 0.5);

  let contenidoResultado = '';
  for (let i = 0; i < nombres.length; i++) {
    const amigoSecreto = amigosSorteados[i];
    contenidoResultado += `<li>${nombres[i]} -> ${amigoSecreto}</li>`;
  }
  resultado.innerHTML = contenidoResultado;
}
