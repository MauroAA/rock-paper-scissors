let rockPaperScissors = ["Rock", "Paper", "Scissors"];
let finalRecord = document.createElement ('div');
let restarGame = document.createElement ('a');
finalRecord.classList.add ('finalRecord');
let container = document.querySelector ('.container');
container.appendChild (finalRecord);
let recordPlayer = 0;
let recordMachine = 0;

const winner = document.querySelector ('.announceWinner');
const btnRock = document.getElementById ('rock');
const btnPaper = document.getElementById ('paper');
const btnScissors = document.getElementById ('scissors');
const computerSelection = '';
const buttons = document.querySelectorAll ('.button');
const player = document.getElementById ('player');
const machine = document.getElementById ('machine');

var playerSelection = '';



btnRock.addEventListener ('click', () => {
    btnRock.classList.add ('pressButton');
    playerSelection = 'Rock';
    winner.style.display = 'block';
    game ();
})

btnScissors.addEventListener ('click', () => {
    btnScissors.classList.add ('pressButton');
    playerSelection = 'Scissors';
    winner.style.display = 'block';
    game ();
})

btnPaper.addEventListener ('click', () => {
    btnPaper.classList.add ('pressButton');
    playerSelection = 'Paper';
    winner.style.display = 'block';
    game ();
})


//Funcion para generar una opcion Random.
function getComputerChoice () { //Esto todavia no se ejecuta porque no la llamamos.
    let randomRockPaperScissors = Math.floor (Math.random () * rockPaperScissors.length);
    return rockPaperScissors [randomRockPaperScissors];
}


//Funcion para generar el juego
function playRound (playerSelection, computerSelection) { //Esto todavia no se ejecuta porque no la llamamos.
    if (playerSelection === "Rock" && computerSelection === "Paper" || 
    playerSelection === "Paper" && computerSelection === "Scissors" ||  //The chances of the machine winning 
    playerSelection === "Scissors" && computerSelection === "Rock") {
        recordMachine++
        winner.innerHTML = 'Machine WON';
        return;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock" || 
    playerSelection === "Scissors" && computerSelection === "Paper" || //The chances of the player winning
    playerSelection === "Rock" && computerSelection === "Scissors") {
        recordPlayer++
        winner.innerHTML = 'Player WON';
        return;
    }
    else {
        winner.innerHTML = 'is a TIE';
    }
}

function game () {
     const computerSelection = getComputerChoice ();
     playRound (playerSelection, computerSelection);
     player.textContent = `Player: ${recordPlayer}`;
     machine.textContent = `Machine: ${recordMachine}`;

    if (recordPlayer === 5) {
            finalRecord.innerHTML = 'Player wins the match'

    } else if (recordMachine === 5) {
            finalRecord.innerHTML = 'Machine wins the match'
    }
}


function removeTransition (e) {
    if (e.propertyName === 'transform') return;
    this.classList.remove ('pressButton');
}


buttons.forEach ((btn) => btn.addEventListener ("transitionend", removeTransition));





