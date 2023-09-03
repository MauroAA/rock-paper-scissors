let rockPaperScissors = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt ("Choise your wapon");
const computerSelection = getComputerChoice ();

function getComputerChoice () {
    let randomRockPaperScissors = Math.floor (Math.random () * rockPaperScissors.length);
    return rockPaperScissors [randomRockPaperScissors];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Machine WON";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Won"
    }
    else {
        return "is a TIE";
    }
}



console.log (playRound (playerSelection, computerSelection));







