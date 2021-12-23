const options = document.querySelectorAll(".play-options button");
const playButton = document.getElementById("play-button");
const playTransition = document.getElementById("play-transition");
const playResults = document.getElementById("play-results");
const choicePlayer1 = document.getElementById("choice-player1");
const choicePlayer2 = document.getElementById("choice-player2");
const choiceWinner = document.getElementById("choice-winner");
const winnerAnnouncement = document.getElementById("winner-announcement");

for (let o of options) {
  o.addEventListener("click", select);
}

function select () {
  const options = this.parentElement.children;
  for (let o of options) {
    o.classList.remove("selected");
  }
  
  this.classList.add("selected");
}

function winner (optionPlayer1, optionPlayer2) {
    if(optionPlayer1 === optionPlayer2) {
      return 0;
    }
    if(optionPlayer1 === "rock" && optionPlayer2 === "scissors") {
      return 1;
    }
    if(optionPlayer1 === "rock" && optionPlayer2 === "paper") {
      return 2;
    }
    if(optionPlayer1 === "scissors" && optionPlayer2 === "paper") {
      return 1;
    }
    if(optionPlayer1 === "scissors" && optionPlayer2 === "rock") {
      return 2;
    }
    if(optionPlayer1 === "paper" && optionPlayer2 === "rock") {
      return 1;
    }
    if(optionPlayer1 === "paper" && optionPlayer2 === "scissors") {
      return 2;
    }
}

function play () {
  const optionPlayer1 = document.querySelector(".play-options.player1 .selected");
  const optionPlayer2 = document.querySelector(".play-options.player2 .selected");
  playTransition.classList.remove("hidden");
  playButton.classList.add("hidden");
  results(optionPlayer1, optionPlayer2);
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
  }, 4000);
}

function results (optionPlayer1, optionPlayer2) {
  choicePlayer1.innerHTML = "";
  choicePlayer1.appendChild(optionPlayer1.children[0].cloneNode(true));
  choicePlayer2.innerHTML = "";
  choicePlayer2.appendChild(optionPlayer2.children[0].cloneNode(true));
  const playerWinner = winner(optionPlayer1.name, optionPlayer2.name);
  const message = document.querySelector("#winner-announcement p");
  if (playerWinner === 1) {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionPlayer1.children[0].cloneNode(true));
    message.textContent = "Player 1 venceu";
    choiceWinner.className = "win";
  } else if (playerWinner === 2) {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionPlayer2.children[0].cloneNode(true));
    message.textContent = "Player 2 venceu";
    choiceWinner.className = "win";
  } else {
    choiceWinner.innerHTML = "";
    choiceWinner.appendChild(optionPlayer1.children[0].cloneNode(true));
    message.textContent = "Empate"
    choiceWinner.className = "draw";
  }
}

