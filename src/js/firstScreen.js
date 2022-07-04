const matches = document.querySelectorAll(".match button");
initialLoad();


for (let m of matches) {
  m.addEventListener("click", function() {
    const selectedButton = document.querySelector(".match .selected");
    selectedButton.classList.remove("selected");
    m.classList.add("selected");
  });
}

function saveName(name) {
  localStorage.setItem("name", name);
}

function saveNumberOfMatches(numMatches) {
  localStorage.setItem("number of matches", numMatches);
}

function initialLoad() {
  let name = localStorage.getItem("name");
  let numMatches = localStorage.getItem("number of matches");

  document.getElementById("player-name").value = name;

  const selectedButton = document.querySelector(".match .selected");
  selectedButton.classList.remove("selected");
  if (numMatches == 10) {
    document.getElementById('matches-10').classList.add ('selected');
  } else {
    document.getElementById('matches-5').classList.add('selected');
  }
}