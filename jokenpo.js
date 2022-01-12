const options = document.querySelectorAll(".play-options button");
const playButton = document.getElementById("play-button");
const playTransition = document.getElementById("play-transition");
const playResults = document.getElementById("play-results");
const choicePlayer1 = document.getElementById("choice-player1");
const choiceCPU = document.getElementById("choice-cpu");
const choiceWinner = document.getElementById("choice-winner");
const winnerAnnouncement = document.getElementById("winner-announcement");
const optionsCPU = document.querySelector(".play-options.cpu").children;

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
    message.textContent = "Player 1 venceu";
    choiceWinner.className = "win";
  } else if (playerWinner === 2) {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionCPU.children[0].cloneNode(true));
    message.textContent = "Computador venceu";
    choiceWinner.className = "win";
  } else {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionPlayer1.children[0].cloneNode(true));
    message.textContent = "Empate";
    choiceWinner.className = "draw";
  }
}
