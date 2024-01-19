let bo1 = document.getElementById("bo1");
let bo5 = document.getElementById("bo5");
let bo7 = document.getElementById("bo7");
let pvp = document.getElementById("pvp");
let pvc = document.getElementById("pvc");
let submitBtn = document.getElementById("submitBtn");

let boX = document.getElementById("boX");
let xBtn = document.getElementById("xBtn");
let gameplay = document.getElementById("gameplay");
let rules = document.getElementById("rules")
let opponent = document.getElementById("opponent");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let turn = document.getElementById("turn");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let spock = document.getElementById("spock");
let lizard = document.getElementById("lizard");

let wL = document.getElementById("wL");

let ply1Score = 0;
let ply2Score = 0;
let winScore = 0;


function checkMode() {

    if(bo1.checked == true){
        localStorage.setItem('mode', JSON.stringify(1));
    }else if(bo5.checked == true){
        localStorage.setItem('mode', JSON.stringify(5));
    }else{
        localStorage.setItem('mode', JSON.stringify(7));
    }

    if(pvp.checked == true){
        localStorage.setItem('opponent', JSON.stringify("PLAYER 2"));
    }else{
        localStorage.setItem('opponent', JSON.stringify("CPU"));
    }
}

function closeMenu(){
    if(gameplay.style.display == 'none'){
        gameplay.style.display = 'block';
        rules.style.display = 'none';
    }else{
        gameplay.style.display = 'none';
        rules.style.display = 'block';
    }
}






async function apiCall(){
    const prom = await fetch("https://rpslsapi.azurewebsites.net/RPSLS", {method: "GET"});
    const results = await prom.text();
    console.log(results);
}




