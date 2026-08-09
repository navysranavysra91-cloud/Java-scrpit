const display = document.querySelector(".display");
const BlockHeight = 40;
const BlockWidth = 40;

const cols = Math.floor(display.clientWidth / BlockWidth);
const rows = Math.floor(display.clientHeight / BlockHeight);
const scoreDisplay = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".high-score");
const timeDisplay = document.querySelector(".time");
const startBtn = document.querySelector(".start-btn");
const restartBtn = document.querySelector(".restart-btn");
const startScreen = document.querySelector(".start");
const gameOverScreen = document.querySelector(".game-over");

let intervalId = null;
let score = 0;
let time = `00-00`;
let highScore = localStorage.getItem("highScore") || 0;
highScoreDisplay.textContent = highScore;
let blocks = [];
let direction = "right";
let snake = [
  {
    x: 2,
    y: 3,
  },
];
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    display.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

intervalId = setInterval(() => {
  render();
}, 300);
function render() {
  let head = null;
  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }
  blocks[`${food.x}-${food.y}`].classList.add("food");
  snake.forEach((segement) => {
    blocks[`${segement.x}-${segement.y}`].classList.remove("fill");
  });
  snake.unshift(head);
  snake.pop();
  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    snake.push(snake[snake.length - 1]);
    score += 10;
    scoreDisplay.textContent = score;
  }

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }

  snake.forEach((segement) => {
    blocks[`${segement.x}-${segement.y}`].classList.add("fill");
  });
}
startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    intervalId = setInterval(() => {
        render();
    }, 400);
});

addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    direction = "left";
  } else if (e.key === "ArrowRight") {
    direction = "right";
  } else if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowDown") {
    direction = "down";
  }
});
