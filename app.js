let nombres = [];

function mostrarNombres() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Debe ingresar un nombre válido.");
    return;
  }

  nombres.push(nombre);
  input.value = "";
  mostrarNombres();
}

function sortearAmigo() {
  if (nombres.length < 2) {
    alert("Debes ingresar al menos dos nombres para hacer el sorteo.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const ganador = nombres[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: ${ganador}</li>`;

  lanzarConfetti();
}

function lanzarConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function reiniciarSorteo() {
  nombres = [];
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAgregar").addEventListener("click", agregarAmigo);
  document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
  document.getElementById("btnReiniciar").addEventListener("click", reiniciarSorteo);
});
