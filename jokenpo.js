const options = document.querySelectorAll(".play-options button");
const playButton = document.getElementById("play-button");
const playTransition = document.getElementById("play-transition");
const playResults = document.getElementById("play-results");
const choicePlayer1 = document.getElementById("choice-player1");
const choiceCPU = document.getElementById("choice-cpu");
const choiceWinner = document.getElementById("choice-winner");
const winnerAnnouncement = document.getElementById("winner-announcement");
const optionsCPU = document.querySelector(".play-options.cpu").children;
let placarPlayer1 = 0;
let placarCPU = 0;
const finalAnnouncement = document.getElementById("final-announcement");
let gameOver = false;
const player1ScoreElement = document.getElementById("player1-score");
const cpuScoreElement = document.getElementById("cpu-score");
const optionsPlayer1 = document.querySelector(".play-options.player1");
const playAgain = document.getElementById("play-again");

for (let o of options) {
  o.addEventListener("click", select);
}

function select() {
  const options = this.parentElement.children;
  for (let o of options) {
    o.classList.remove("selected");
  }

  this.classList.add("selected");
}

function winner(optionPlayer1, optionCPU) {
  if (optionPlayer1 == optionCPU) {
    return 0;
  }
  if (
    (optionPlayer1 == "rock" && optionCPU == "scissors") ||
    (optionPlayer1 == "scissors" && optionCPU == "paper") ||
    (optionPlayer1 == "paper" && optionCPU == "rock")
  ) {
    return 1;
  }
  if (
    (optionPlayer1 == "rock" && optionCPU == "paper") ||
    (optionPlayer1 == "scissors" && optionCPU == "rock") ||
    (optionPlayer1 == "paper" && optionCPU == "scissors")
  ) {
    return 2;
  }
}
function playCPU(){
  const randomOption = Math.floor(Math.random() * 3);
  selectedOption = optionsCPU[randomOption];
  selectedOption.click();
}

function play() {
  playAgain.classList.add("hidden");
  optionsPlayer1.classList.remove("hidden");
  if (gameOver == true){
    placarPlayer1 = 0;
    placarCPU = 0;
    updateScore();
    finalAnnouncement.textContent = '';
    gameOver = false;
  }
  const optionPlayer1 = document.querySelector(
    ".play-options.player1 .selected"
  );

  playCPU()
  const optionCPU = document.querySelector(
    ".play-options.cpu .selected"
  );

  playTransition.classList.remove("hidden");
  playButton.classList.add("hidden");
  results(optionPlayer1, optionCPU);
  setTimeout(() => {
    playTransition.classList.add("hidden");
    playResults.classList.remove("hidden");
  }, 1000);

  setTimeout(() => {
    playResults.classList.add("hidden");
    winnerAnnouncement.classList.remove("hidden");
    updateScore();
  }, 2000);

  setTimeout(() => {
    winnerAnnouncement.classList.add("hidden");
    playButton.classList.remove("hidden");
  }, 5000);
}

function results(optionPlayer1, optionCPU) {
  choicePlayer1.innerHTML = "";
  choicePlayer1.appendChild(optionPlayer1.children[0].cloneNode(true));

  choiceCPU.innerHTML = "";
  choiceCPU.appendChild(optionCPU.children[0].cloneNode(true));

  const playerWinner = winner(optionPlayer1.name, optionCPU.name);
  const message = document.querySelector("#winner-announcement p");

  if (playerWinner === 1) {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionPlayer1.children[0].cloneNode(true));
    message.textContent = "Player 1 ganhou";
    choiceWinner.className = "win";
  } else if (playerWinner === 2) {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionCPU.children[0].cloneNode(true));
    message.textContent = "Computador ganhou";
    choiceWinner.className = "win";
  } else {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionPlayer1.children[0].cloneNode(true));
    message.textContent = "Empate";
    choiceWinner.className = "draw";
  }
  points(playerWinner);
}

function points(winner) {
  message = false;

  if(winner == 1) {
     placarPlayer1 += 1;
    if (placarPlayer1 == 3) {
      message = "Player1 venceu!";
      gameOver = true;
    }
  }
  if(winner == 2) {
    placarCPU += 1;
    if (placarCPU == 3) {
      message = "Computador venceu!";
      gameOver = true;
    }
  }

  if(message) {
    setTimeout(() => {
      finalAnnouncement.textContent = message;
      playAgain.classList.remove("hidden");
      optionsPlayer1.classList.add("hidden");
    }, 2000);
  }
}

function updateScore() {
  player1ScoreElement.textContent = placarPlayer1;
  cpuScoreElement.textContent = placarCPU;
}