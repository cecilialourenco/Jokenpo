const matches = document.querySelectorAll(".match button");

for (let m of matches) {
  m.addEventListener("click", function() {
    const selectedButton = document.querySelector(".match .selected");
    selectedButton.classList.remove("selected");
    m.classList.add("selected");
  });
}

