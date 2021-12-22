const options = document.querySelectorAll(".play-options button");

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
//   }
// }