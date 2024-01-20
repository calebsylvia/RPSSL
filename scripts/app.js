let bo1 = document.getElementById("bo1");
let bo5 = document.getElementById("bo5");
let bo7 = document.getElementById("bo7");
let pvp = document.getElementById("pvp");
let pvc = document.getElementById("pvc");
let submitBtn = document.getElementById("submitBtn");

let boX = document.getElementById("boX");
let xBtn = document.getElementById("xBtn");
let menu = document.getElementById("menu");
let turnArrow = document.getElementById("turnArrow");
let gameplay = document.getElementById("gameplay");
let rules = document.getElementById("rules");
let opponent = document.getElementById("opponent");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let turn = document.getElementById("turn");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let spock = document.getElementById("spock");
let lizard = document.getElementById("lizard");
let outcome = document.getElementById("outcome");

let wL = document.getElementById("wL");

let ply1Score = 0;
let ply2Score = 0;
let winScore = 0;
let playerTurn = 0;
let mode = "";

let choice = "";
let player1Choice = "";
let p1Choice = true;
let p2Choice = false;
let player2Choice = "";
let endGame = false;

function checkMode() {
  if (bo1.checked == true) {
    localStorage.setItem("mode", JSON.stringify(1));
  } else if (bo5.checked == true) {
    localStorage.setItem("mode", JSON.stringify(5));
  } else {
    localStorage.setItem("mode", JSON.stringify(7));
  }

  if (pvp.checked == true) {
    localStorage.setItem("opponent", JSON.stringify("PLAYER 2"));
  } else {
    localStorage.setItem("opponent", JSON.stringify("CPU"));
  }
}

function startGame() {
  if (localStorage.getItem("mode") == "1") {
    boX.innerText = "BEST OF 1";
    winScore = 1;
  } else if (localStorage.getItem("mode") == "5") {
    boX.innerText = "BEST OF 5";
    winScore = 3;
  } else {
    boX.innerText = "BEST OF 7";
    winScore = 5;
  }

  if (JSON.parse(localStorage.getItem("opponent")) == "PLAYER 2") {
    opp.innerText = "PLAYER 2";
  } else if (JSON.parse(localStorage.getItem("opponent")) == "CPU") {
    opp.innerText = "CPU";
  } else {
    console.log(error);
  }

  if (opp.innerText === "CPU") {
    mode = "computer";
  } else {
    mode = "player";
  }

  async function getComputerChoice() {
    const prom = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");
    const data = await prom.text();
    player2Choice = data.toLowerCase();
  }
  getComputerChoice();

  rock.addEventListener("click", (e) => {
    if (mode === "player") {
      if (p1Choice) {
        player1Choice = "rock";
        console.log(player1Choice);
        p2Choice = true;
        p1Choice = false;
        turnArrow.classList.remove("p1turn");
        turnArrow.classList.add("p2turn");
        turn.innerText = "PLAYER 1'S TURN";
      } else {
        player2Choice = "rock";
        console.log(player2Choice);
        p1Choice = true;
        p2Choice = false;
        turnArrow.classList.remove("p2turn");
        turnArrow.classList.add("p1turn");
        turn.innerText = "PLAYER 2'S TURN";
      }
      whoWin();
    } else if (mode === "cpu") {
      player1Choice = "rock";
      getComputerChoice();
      whoWin();
    }
  });

  paper.addEventListener("click", (e) => {
    if (mode === "player") {
      if (p1Choice) {
        player1Choice = "paper";
        console.log(player1Choice);
        p2Choice = true;
        p1Choice = false;
        turnArrow.classList.remove("p1turn");
        turnArrow.classList.add("p2turn");
        turn.innerText = "PLAYER 1'S TURN";
      } else {
        player2Choice = "paper";
        console.log(player2Choice);
        p1Choice = true;
        p2Choice = false;
        turnArrow.classList.remove("p2turn");
        turnArrow.classList.add("p1turn");
        turn.innerText = "PLAYER 2'S TURN";
      }
      whoWin();
    } else if (mode === "cpu") {
      player1Choice = "paper";
      getComputerChoice();
      whoWin();
    }
  });

  scissors.addEventListener("click", (e) => {
    if (mode === "player") {
      if (p1Choice) {
        player1Choice = "scissors";
        console.log(player1Choice);
        p2Choice = true;
        p1Choice = false;
        turnArrow.classList.remove("p1turn");
        turnArrow.classList.add("p2turn");
        turn.innerText = "PLAYER 1'S TURN";
      } else {
        player2Choice = "scissors";
        console.log(player2Choice);
        p1Choice = true;
        p2Choice = false;
        turnArrow.classList.remove("p2turn");
        turnArrow.classList.add("p1turn");
        turn.innerText = "PLAYER 2'S TURN";
      }
      whoWin();
    } else if (mode === "cpu") {
      player1Choice = "scissors";
      getComputerChoice();
      whoWin();
    }
  });

  spock.addEventListener("click", (e) => {
    if (mode === "player") {
      if (p1Choice) {
        player1Choice = "spock";
        console.log(player1Choice);
        p2Choice = true;
        p1Choice = false;
        turnArrow.classList.remove("p1turn");
        turnArrow.classList.add("p2turn");
        turn.innerText = "PLAYER 1'S TURN";
      } else {
        player2Choice = "spock";
        console.log(player2Choice);
        p1Choice = true;
        p2Choice = false;
        turnArrow.classList.remove("p2turn");
        turnArrow.classList.add("p1turn");
        turn.innerText = "PLAYER 2'S TURN";
      }
      whoWin();
    } else if (mode === "cpu") {
      player1Choice = "spock";
      getComputerChoice();
      whoWin();
    }
  });

  lizard.addEventListener("click", (e) => {
    if (mode === "player") {
      if (p1Choice) {
        player1Choice = "lizard";
        console.log(player1Choice);
        p2Choice = true;
        p1Choice = false;
        turnArrow.classList.remove("p1turn");
        turnArrow.classList.add("p2turn");
        turn.innerText = "PLAYER 1'S TURN";
      } else {
        player2Choice = "lizard";
        console.log(player2Choice);
        p1Choice = true;
        p2Choice = false;
        turnArrow.classList.remove("p2turn");
        turnArrow.classList.add("p1turn");
        turn.innerText = "PLAYER 2'S TURN";
      }
      whoWin();
    } else if (mode === "cpu") {
      player1Choice = "lizard";
      getComputerChoice();
      whoWin();
    }
  });

  if (mode === "player") {
    while (score1 <= winScore || score2 <= winScore) {}
  } else {
  }

  function whoWin() {
    if (player1Choice === player2Choice) {
      outcome.innerText = "TIE!";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "rock" && player2Choice == "scissors") {
      ply1Score++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "rock" && player2Choice == "lizard") {
      ply1Score++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "paper" && player2Choice == "rock") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "paper" && player2Choice == "spock") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "scissors" && player2Choice == "lizard") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "scissors" && player2Choice == "paper") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "spock" && player2Choice == "scissors") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "spock" && player2Choice == "rock") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } 
    else if (player1Choice == "lizard" && player2Choice == "paper") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player1Choice == "lizard" && player2Choice == "spock") {
      score1++;
      score1.innerText = ply1Score;
      outcome.innerText = "PLAYER 1 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } 
    else if (player2Choice == "rock" && player1Choice == "scissors") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player2Choice == "rock" && player1Choice == "lizard") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    }else if (player2Choice == "paper" && player1Choice == "spock") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    }
    else if (player2Choice == "paper" && player1Choice == "rock") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player2Choice == "scissors" && player1Choice == "lizard") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } 
    else if (player2Choice == "scissors" && player1Choice == "paper") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player2Choice == "spock" && player1Choice == "rock") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    }
    else if (player2Choice == "spock" && player1Choice == "scissors") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    } else if (player2Choice == "lizard" && player1Choice == "paper") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    }else if (player2Choice == "lizard" && player1Choice == "spock") {
      score2++;
      score2.innerText = ply2Score;
      outcome.innerText = "PLAYER 2 WINS ROUND";
      player1Choice = "";
      player2Choice = "";
    }
  }
}

function openMenu() {
  if (gameplay.style.display === "block") {
    menu.style.display = "block";
    gameplay.style.display = "none";
  }
}

function closeMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    gameplay.style.display = "block";
  }
}

function closeRules() {
  if (gameplay.style.display == "none") {
    gameplay.style.display = "block";
    rules.style.display = "none";
  } else {
    gameplay.style.display = "none";
    rules.style.display = "block";
  }
  startGame();
}

function displayWinner() {
  if (JSON.parse(localStorage.getItem("winner")) === "PLAYER 1") {
    wL.innerText = "PLAYER 1 WINS!";
  } else if (JSON.parse(localStorage.getItem("winner")) === "PLAYER 2") {
    wL.innerText = "PLAYER 2 WINS!";
  } else {
    wL.innerText = "CPU WINS!";
  }
}
