const rpcArray = ["rock", "paper", "scissors"];

function computerPlay() {
  return rpcArray[Math.floor(Math.random() * rpcArray.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log("Player Selection: " + playerSelection);
  console.log("Computer Selection: " + computerSelection);

  let result = "";
  //let won = false;

  if (playerSelection === computerSelection) {
    result = "You've Tied!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "Paper beats Rock, CPU wins!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "Rock beats Scissors, You win!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Paper beats Rock, You win!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "Scissors beats Paper, CPU wins!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "Rock beats Scissors, CPU wins!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "Scissors beats Paper, You win!";
  }

  return result;
}

function game() {
  let cpuScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelectionYoo = prompt("Rock, Paper or Scissors?");
    computerSelectionYoo = computerPlay();
    let returnedValue = playRound(playerSelectionYoo, computerSelectionYoo);
    console.log("Round " + i + " Results: ");
    if (
      returnedValue === "Paper beats Rock, CPU wins!" ||
      returnedValue === "Scissors beats Paper, CPU wins!" ||
      returnedValue === "Rock beats Scissors, CPU wins!"
    ) {
      cpuScore++;
    }
    if (
      returnedValue === "Rock beats Scissors, You win!" ||
      returnedValue === "Paper beats Rock, You win!" ||
      returnedValue === "Scissors beats Paper, You win!"
    ) {
      playerScore++;
    }
    console.log("cpuScore: " + cpuScore);
    console.log("playerScore: " + playerScore);
  }
  if (cpuScore > playerScore) {
    return "CPU Wins! " + cpuScore + " - " + playerScore;
  } else {
    return "Player 1 Wins! " + playerScore + " - " + cpuScore;
  }
}

const playerSelection = "RoCk";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log(game());
