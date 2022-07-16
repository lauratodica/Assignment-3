function computerPlay() {
    const str = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * str.length);
    return(random, str[random]);
} 

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    switch(true) {
        case (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") :
            computerWins++;
            console.log("You lose! Paper beats rock!") 
            return computerWins;
            break;
        case (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") :
            playerWins++;
            console.log("You win! Rock beats scrissors!");
            return playerWins;
            break;
        case (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") :
            return "It's a draw! Try again!";
            break;
        case (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") :
            playerWins++;
            console.log("You win! Paper beats rock!");
            return playerWins; 
            break;
        case (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") :
            computerWins++;
            console.log("You lose! Scissors beats paper!");
            return computerWins;
            break;
        case (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") :
            return "It's a draw! Try again!";
            break;
        case (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") :
            computerWins++;
            console.log("You lose! Rock beats scissors");
            return computerWins;
            break;
        case (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") :
            playerWins++;
            console.log("You win! Scissors beats paper");
            return playerWins;
            break;
        case (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") :
            return "It's a draw! Try again!";
            break;
    }

}


function game() {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Enter your selection - rock, paper or scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerWins, "player");
        console.log(computerWins, "computer")
    }
    switch(true) {
        case (playerWins > computerWins) :
            window.prompt("Player is the winner!");
            break;
        case (playerWins == computerWins) :
            window.prompt("It's a draw");
            break;
        case (playerWins < computerWins) :
            window.prompt("Computer is the winner!");
    }
}

game();