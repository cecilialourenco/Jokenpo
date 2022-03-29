function buildTd(content) {
    let td = document.createElement("td");
    td.textContent = content;

    return td;
  }

function buildTr(user) {
    console.log(user);
    let userTr = document.createElement("tr");
    userTr.classList.add("user");
    userTr.appendChild(buildTd(user.name));
    userTr.appendChild(buildTd(user.wins));
    userTr.appendChild(buildTd(user.draws));
    userTr.appendChild(buildTd(user.losses));
    userTr.appendChild(buildTd(user.points));

    return userTr;
  }

function loadRanking() {
    fetch("http://localhost:3000/users", {
      method: "GET",
    }).then(async response => {
      users = await response.json();
      users.forEach( function(user) {
        let userTr = buildTr(user);
        let table = document.querySelector("#usersTable");
        table.appendChild(userTr);
      });
    });
  }

  loadRanking()