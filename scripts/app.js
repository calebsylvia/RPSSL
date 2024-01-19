let bo1 = document.getElementById("bo1");
let bo5 = document.getElementById("bo5");
let bo7 = document.getElementById("bo7");
let pvp = document.getElementById("pvp");
let pvc = document.getElementById("pvc");
let submitBtn = document.getElementById("submitBtn");

let boX = document.getElementById("boX");
let xBtn = document.getElementById("xBtn");
let menu = document.getElementById("menu");
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
}

function openMenu(){
  if(gameplay.style.display === "block"){
    menu.style.display = "block";
    gameplay.style.display = "none";
  }
}

function closeMenu(){
  if(menu.style.display === "block"){
  menu.style.display = "none";
  gameplay.style.display = "block";
  }
}

function playerMode() {
  if (opp.innerText === "CPU") {
    mode = "computer";
  } else {
    mode = "player";
  }
}

let computerChoice = "";
let choice = "";
let player1Choice = "";
let player2Choice = "";

rock.addEventListener("click", function (e) {
  choice = "rock";
});

paper.addEventListener("click", function (e) {
  choice = "paper";
});

scissors.addEventListener("click", function (e) {
  choice = "scissors";
});

spock.addEventListener("click", function (e) {
  choice = "spock";
});

lizard.addEventListener("click", function (e) {
  choice = "lizard";
});

function playGame(mode) {
  if (mode === "computer") {
  } else {
  }
}

function closeMenu() {
  if (gameplay.style.display == "none") {
    gameplay.style.display = "block";
    rules.style.display = "none";
  } else {
    gameplay.style.display = "none";
    rules.style.display = "block";
  }
  startGame();
}

function whoWinCPU(player1Choice, computerChoice) {
  while (score1 <= winScore || score2 <= winScore) {
    if (player1Choice === computerChoice) {
      outcome.innerText = "TIE!";
    } else if (
      player1Choice == "rock" && computerChoice == "scissors" ||
      computerChoice == "lizard"
    ) {
      score1++;
      outcome.innerText = "PLAYER 1 WINS";
    } else if (
      player1Choice == "paper" && computerChoice == "rock" ||
      computerChoice == "spock"
    ) {
      score1++;
      outcome.innerText = "PLAYER 1 WINS";
    } else if (
        player1Choice == 'scissors' && computerChoice == 'paper' || computerChoice == 'lizard'
    ) {
        score1++;
        outcome.innerText = "PLAYER 1 WINS";
    } else if (
        player1Choice == 'spock' && computerChoice == 'scissors' || computerChoice == 'rock'
    ) {
        score1++;
        outcome.innerText = "PLAYER 1 WINS";
    } else if (
        player1Choice == 'lizard' && computerChoice == 'paper' || computerChoice == 'spock'
    ) {
        score1++;
        outcome.innerText = "PLAYER 1 WINS";
    } else if (
        computerChoice == "rock" && player1Choice == "scissors" ||
        player1Choice == "lizard"
      ) {
        score2++;
        outcome.innerText = "CPU WINS";
      } else if (
        computerChoice == "paper" && player1Choice == "rock" ||
        player1Choice == "spock"
      ) {
        score2++;
        outcome.innerText = "CPU WINS";
      } else if (
          computerChoice == 'scissors' && player1Choice == 'paper' || player1Choice == 'lizard'
      ) {
          score2++;
          outcome.innerText = "CPU WINS";
      } else if (
          computerChoice == 'spock' && player1Choice == 'scissors' || player1Choice == 'rock'
      ) {
          score2++;
          outcome.innerText = "CPU WINS";
      } else if (
          computerChoice == 'lizard' && player1Choice == 'paper' || player1Choice == 'spock'
      ) {
          score2++;
          outcome.innerText = "CPU WINS";
      } else {
        console.log(error)
      }
  }
}

function whoWin2P(player1Choice, player2Choice) {
    while (score1 <= winScore || score2 <= winScore) {
        if (player1Choice === player2Choice) {
          outcome.innerText = "TIE!";
        } else if (
          player1Choice == "rock" && player2Choice == "scissors" ||
          player2Choice == "lizard"
        ) {
          score1++;
          outcome.innerText = "PLAYER 1 WINS";
        } else if (
          player1Choice == "paper" && player2Choice == "rock" ||
          player2Choice == "spock"
        ) {
          score1++;
          outcome.innerText = "PLAYER 1 WINS";
        } else if (
            player1Choice == 'scissors' && player2Choice == 'paper' || player2Choice == 'lizard'
        ) {
            score1++;
            outcome.innerText = "PLAYER 1 WINS";
        } else if (
            player1Choice == 'spock' && player2Choice == 'scissors' || player2Choice == 'rock'
        ) {
            score1++;
            outcome.innerText = "PLAYER 1 WINS";
        } else if (
            player1Choice == 'lizard' && player2Choice == 'paper' || player2Choice == 'spock'
        ) {
            score1++;
            outcome.innerText = "PLAYER 1 WINS";
        } else if (
            player2Choice == "rock" && player1Choice == "scissors" ||
            player1Choice == "lizard"
          ) {
            score2++;
            outcome.innerText = "PLAYER 2 WINS";
          } else if (
            player2Choice == "paper" && player1Choice == "rock" ||
            player1Choice == "spock"
          ) {
            score2++;
            outcome.innerText = "PLAYER 2 WINS";
          } else if (
              player2Choice == 'scissors' && player1Choice == 'paper' || player1Choice == 'lizard'
          ) {
              score2++;
              outcome.innerText = "PLAYER 2 WINS";
          } else if (
              player2Choice == 'spock' && player1Choice == 'scissors' || player1Choice == 'rock'
          ) {
              score2++;
              outcome.innerText = "PLAYER 2 WINS";
          } else if (
              player2Choice == 'lizard' && player1Choice == 'paper' || player1Choice == 'spock'
          ) {
              score2++;
              outcome.innerText = "PLAYER 2 WINS";
          } else {
            console.log(error)
          }
      }
}

function displayWinner(){
  if(JSON.parse(localStorage.getItem("winner")) === "PLAYER 1"){
    wL.innerText = "PLAYER 1 WINS!"
  }else if(JSON.parse(localStorage.getItem("winner")) === "PLAYER 2"){
    wL.innerText = "PLAYER 2 WINS!"
  }else{
    wL.innerText = "CPU WINS!"
  }
}