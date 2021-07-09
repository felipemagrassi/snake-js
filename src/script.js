let canvas = document.getElementById("snakegame");
let context = canvas.getContext("2d");
let box = 32;

function createBoard() {
  context.fillStyle = "RebeccaPurple";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

createBoard();
