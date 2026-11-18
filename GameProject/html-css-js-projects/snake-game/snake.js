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
let timeIntervalId = null;
let score = 0;
let time = `00-00`;
let highScore = localStorage.getItem("highScore") || 0;
highScoreDisplay.textContent = highScore;
let direction="right";
const blocks = [];
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
addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
  else if (e.key === "ArrowRight" && direction !== "left") direction = "right";
  else if (e.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (e.key === "ArrowDown" && direction !== "up") direction = "down";
});

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
  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    score += 10;
    scoreDisplay.textContent = score;
  }else{
    snake.pop();
  }
  
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    clearInterval(timeIntervalId);
    gameOverScreen.style.display = "flex";
    return;
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      clearInterval(intervalId);
      clearInterval(timeIntervalId);
      gameOverScreen.style.display = "flex";
      return;
    }
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
  timeIntervalId = setInterval(() => {
     let [minutes,seconds ] = time.split("-").map(Number);

     if(seconds == 59){
       minutes++;
       seconds = 0;
     }else{
      seconds++;
     }
     time = `${minutes.toString().padStart(2,"0")}-${seconds.toString().padStart(2,"0")}`;
      
     timeDisplay.innerText = time;

  }, 1000);
  intervalId = setInterval(() => {render();}, 400);
});

restartBtn.addEventListener("click",()=>{
  clearInterval(intervalId);
  clearInterval(timeIntervalId);
  gameOverScreen.style.display = "none";
  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((segement) => {
    blocks[`${segement.x}-${segement.y}`].classList.remove("fill");
  });
  score = 0;
  time = `00-00`;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  highScoreDisplay.textContent = highScore;
  // Reset game state
  direction = "right";
  snake = [{x:2,y:2}];
  food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)};
  timeIntervalId = setInterval(() => {
    let [minutes,seconds ] = time.split("-").map(Number);
    if(seconds == 59){
      minutes++;
      seconds = 0;
    }else{
      seconds++;
    }
    time = `${minutes.toString().padStart(2,"0")}-${seconds.toString().padStart(2,"0")}`;
    timeDisplay.innerText = time;
  }, 1000);
  intervalId = setInterval(() => {render();}, 400);
});

