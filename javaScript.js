let rockPaperScissors = ["Rock", "Paper", "Scissors"];
let recordPlayer = 0;
let recordMachine = 0;


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
        return "Machine WON";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock" || 
    playerSelection === "Scissors" && computerSelection === "Paper" || //The chances of the player winning
    playerSelection === "Rock" && computerSelection === "Scissors") {
        recordPlayer++
        return "You Won"
    }
    else {
        return "is a TIE";
    }
}

//Funcion para llamar el juego 5 veces
function game () {
    for (let i = 1; i <= 5; i++) {
        var playerSelection = prompt ("Choise your wapon");
        playerSelection.toLowerCase ();
        const computerSelection = getComputerChoice (); //La guardamos en una variable y llamamos.
        computerSelection.toLowerCase ();
        console.log (playRound (playerSelection, computerSelection) + "\n"); //Aqui la llamamos, aqui se ejecuta.
    }
    if (recordPlayer > recordMachine) {
        console.log ("Player WON the GAME!");
    } 
    else if (recordPlayer === recordMachine) {
        console.log ("TIE GAME");
    }
    else {
        console.log ("Game over, Machine WON the GAME");
    }
}



game ();








