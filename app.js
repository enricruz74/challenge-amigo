// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Define amigos
let amigos = [];

//define sorteados
let sorteados = [];

//Agrega amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  let nombre = input.value.trim();
  //Si el campo está vacío y no es un número, despliega el mensaje
  if (nombre === "" || !isNaN(nombre)) {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }
  amigos.push(nombre);
  atualizarLaLista();
  input.value = "";
}

// Agrega la lista al medio
function atualizarLaLista() {
  const lista = document.getElementById("listaAmigos");
  (lista.innerHTML = ""),
    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo + (index < amigos.lenght - 1 ? "," : "");
      lista.appendChild(li);
    });
}

//Sortea amigo
function sortearAmigo() {
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];
  sorteados.push(amigoSorteado);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo secreto sorteado es: " + sorteados;
  //Muestra un solo resultado y no una lista
  sorteados = [];
}