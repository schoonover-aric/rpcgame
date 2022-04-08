const rpcArray = ["rock", "paper", "scissors"];
function computerPlay() {
  return rpcArray[Math.floor(Math.random() * rpcArray.length)];
}
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const computerSelection = computerPlay();
let results = document.querySelector("#results");
let cpuResults = document.querySelector("#cpuResults");
let playerResults = document.querySelector("#playerResults");
let score = document.querySelector("#score");
let message = document.querySelector("#message");

let cpuScore = 0;
let playerScore = 0;

let roundIsActive = true;

btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, computerPlay());
});
btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerPlay());
});
btnScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, computerPlay());
});

function playRound(playerSelection, computerSelection) {
  //console.dir("Player Selected: " + playerSelection);
  playerResults.textContent = "Player Selected: " + playerSelection;
  //console.log("CPU Selected: " + computerSelection);
  cpuResults.textContent = "CPU Selected: " + computerSelection;

  let result = "";
  //let won = false;

  if (playerSelection === computerSelection) {
    result = "It's a tie, you both get a point!";
    cpuScore++;
    playerScore++;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "Paper beats Rock!";
    cpuScore++;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "Rock beats Scissors!";
    playerScore++;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Paper beats Rock!";
    playerScore++;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "Scissors beats Paper!";
    cpuScore++;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "Rock beats Scissors!";
    cpuScore++;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "Scissors beats Paper!";
    playerScore++;
  }
  if (cpuScore < 5 || playerScore < 5) {
    message.textContent = result + " Go again!";
  }
  if (cpuScore === 5 && playerScore === 5) {
    result = "Holy.. pooop! It's a super rare tie!!";
    message.textContent = "Holy.. pooop! It's a super rare tie!!";
    score.innerHTML =
      "Scoreboard: CPU = " +
      "<span id='scores'>" +
      cpuScore +
      "</span>" +
      " | Humanoid = " +
      "<span id='scores'>" +
      playerScore +
      "</span>";
    cpuScore = 0;
    playerScore = 0;
    return result;
  }
  if (cpuScore === 5) {
    result = "CPU Wins, better luck next time!";
    message.textContent = "CPU Wins, better luck next time!";
    score.innerHTML =
      "Scoreboard: CPU = " +
      "<span id='scores'>" +
      cpuScore +
      "</span>" +
      " | Humanoid = " +
      "<span id='scores'>" +
      playerScore +
      "</span>";
    cpuScore = 0;
    playerScore = 0;
    return result;
  }
  if (playerScore === 5) {
    result = "Player 1 Wins, way to go!";
    message.textContent = "You Win, way to go!";
    score.innerHTML =
      "Scoreboard: CPU = " +
      "<span id='scores'>" +
      cpuScore +
      "</span>" +
      " | Humanoid = " +
      "<span id='scores'>" +
      playerScore +
      "</span>";
    cpuScore = 0;
    playerScore = 0;
    return result;
  }
  score.innerHTML =
    "Scoreboard: CPU = " +
    "<span id='scores'>" +
    cpuScore +
    "</span>" +
    " | Humanoid = " +
    "<span id='scores'>" +
    playerScore +
    "</span>";
}

// function game() {
//   let cpuScore = 0;
//   let playerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     let playerSelectionYoo = prompt("Rock, Paper or Scissors?");
//     let computerSelectionYoo = computerPlay();
//     let returnedValue = playRound(playerSelectionYoo, computerSelectionYoo);
//     console.log("Round " + (i + 1) + " Results: ");
//     console.log("returnedValue: " + returnedValue);

//     if (
//       returnedValue === "Paper beats Rock, CPU wins!" ||
//       returnedValue === "Scissors beats Paper, CPU wins!" ||
//       returnedValue === "Rock beats Scissors, CPU wins!"
//     ) {
//       cpuScore++;
//     }
//     if (
//       returnedValue === "Rock beats Scissors, You win!" ||
//       returnedValue === "Paper beats Rock, You win!" ||
//       returnedValue === "Scissors beats Paper, You win!"
//     ) {
//       playerScore++;
//     }
//     if (returnedValue === "You've Tied!") {
//       cpuScore++;
//       playerScore++;
//     }
//     console.log("cpuScore: " + cpuScore);
//     console.log("playerScore: " + playerScore);
//   }
//   if (cpuScore === playerScore) {
//     return "Wow, it's a super rare TIE!!";
//   }
//   if (cpuScore > playerScore) {
//     return "CPU Wins! " + cpuScore + " - " + playerScore;
//   } else {
//     return "Player 1 Wins! " + playerScore + " - " + cpuScore;
//   }
//   cpuScore = 0;
//   playerScore = 0;
// }

//document.getElementById("testh2").innerHTML = rpcArray[2];

// const playerSelection = "RoCk";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//console.log(game());
