const options = document.querySelectorAll(".play-options.player1 button");
for (let o of options) {
  o.addEventListener("click", select);
}

function select () {
  console.log("oi");
  for (let o of options) {
    o.classList.remove("selected");
  }
  
  console.log(this)
  this.classList.add("selected");
}

// let input = document.querySelector(".input");
// let button = document.querySelector(".button");
// button.disabled = true;
// input.addEventListener("click", select);
// function stateHandle() {
//   if (document.querySelector(".input").value === "") {
//     button.disabled = true; 
//   } else {
//     button.disabled = false;
//   }
// }