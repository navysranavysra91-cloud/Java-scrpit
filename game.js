const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const result = document.getElementById("result");
const Cscore = document.getElementById("computer-points");
const Pscore = document.getElementById("player-points");

let computerPoint = 0;
let playerPoint = 0;
function playGame(choice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let dsp = "";
  if (computerchoice === choice) {
    dsp = "TIE";
  } else {
    switch (choice) {
      case "rock":
        dsp = computerchoice === "scissor" ? "WIN" : "LOSE";
        break;
      case "paper":
        dsp = computerchoice === "rock" ? "WIN" : "LOSE";
        break;
      case "scissor":
        dsp = computerchoice === "paper" ? "WIN" : "LOSE";
    }
  }
  playerDisplay.textContent = "Player Choice :" + choice;
  computerDisplay.textContent = "Computer Choice :" + computerchoice;
  result.textContent = dsp;

  // remove classes without leading dots
  result.classList.remove("red", "green");

  switch (dsp) {
    case "WIN":
      result.classList.add("green");
      playerPoint++;
      Pscore.textContent = playerPoint;

      break;
    case "LOSE":
      result.classList.add("red");
      computerPoint++;
      Cscore.textContent = computerPoint;
      break;
  }
}
