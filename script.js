let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
  // Define a cor
  context.fillStyle = "lightgreen";
  // Desenha o retangulo do jogo
  context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();