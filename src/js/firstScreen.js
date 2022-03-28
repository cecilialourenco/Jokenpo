const matches = document.querySelectorAll(".match button");
// const ranking = JSON.parse(localStorage.getItem('ranking'));
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

// function sortPlayers(ranking) {
//   let bestPlayers = [];

//   for (const [player, victories] of Object.entries(ranking)) {
//     bestPlayers.push([player, victories]);
//   }

//   return bestPlayers.sort((a, b) => b[1] - a[1]);
// }


function initialLoad() {
  let name = localStorage.getItem("name");
  let numMatches = localStorage.getItem("number of matches");
  
  // Load name
  document.getElementById("player-name").value = name;
  
  // Load num matches
  const selectedButton = document.querySelector(".match .selected");
  selectedButton.classList.remove("selected");
  if (numMatches == 10) {
    document.getElementById('matches-10').classList.add ('selected');
  } else {
    document.getElementById('matches-5').classList.add('selected');
  }

  // Load ranking
  // const bestPlayers = sortPlayers(ranking);
  // if (bestPlayers[0]) {
  //   document.getElementById('ranking-1').textContent = bestPlayers[0][0] + " - " + bestPlayers[0][1] + " vitórias";
  // }

  // if (bestPlayers[1]) {
  //   document.getElementById('ranking-2').textContent = bestPlayers[1][0] + " - " + bestPlayers[1][1] + " vitórias";
  // }

  // if (bestPlayers[2]) {
  //   document.getElementById('ranking-3').textContent = bestPlayers[2][0] + " - " + bestPlayers[2][1] + " vitórias";
  // }
}