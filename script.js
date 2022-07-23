const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scorePlayer = document.querySelector('.score-p');
const scoreComputer = document.querySelector('.score-c');
const winner = document.querySelector('.winner-name');
const restart = document.querySelector('.start-again');

// console.log(winner.innerText, "winner");

// console.log(scorePlayer.innerText, "PLAYER Score");
// console.log(scoreComputer.innerText, "COMPUTER score");

// console.log(rock, 'rock');
// console.log(paper, 'paper');
// console.log(scissors, 'scissors');

const resetScore = () => {
    winner.innerText = ""
    computerWins = 0;
    playerWins = 0;
    computerSelection = computerPlay();
    scorePlayer.innerText = `${playerSelection}: ${playerWins}`;
    scoreComputer.innerText = `${computerSelection}: ${computerWins}`;

}

restart.addEventListener('click', e => {
    resetScore();
})

rock.addEventListener('click', e => {
    // playRound();
    playerSelection = (e.target.value = "rock");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scorePlayer.innerText = `${playerSelection}: ${playerWins}`;
    scoreComputer.innerText = `${computerSelection}: ${computerWins}`;
    winnerTime();
})

paper.addEventListener('click', e => {
    playerSelection = (e.target.value = "paper");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scorePlayer.innerText = `${playerSelection}: ${playerWins}`;
    scoreComputer.innerText = `${computerSelection}: ${computerWins}`;
    winnerTime();
})

scissors.addEventListener('click', e => {
    playerSelection = (e.target.value = "scissors");
    // console.log(playerSelection, 'playerSelection-SCISSORS');

    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    scorePlayer.innerText = `${playerSelection}: ${playerWins}`;
    scoreComputer.innerText = `${computerSelection}: ${computerWins}`;
    winnerTime();
})




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
            // console.log("You lose! Paper beats rock!") 
            console.log(computerWins, "computer Wins")
            return computerWins;
            break;
        case (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") :
            playerWins++;
            console.log(playerWins, "player Wins");
            // console.log("You win! Rock beats scrissors!");
            return playerWins;
            break;
        case (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") :
            return "It's a draw! Try again!";
            break;
        case (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") :
            playerWins++;
            console.log(playerWins, "player Wins");
            // console.log("You win! Paper beats rock!");
            return playerWins; 
            break;
        case (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") :
            computerWins++;
            // console.log("You lose! Scissors beats paper!");
            console.log(computerWins, "computer Wins")
            return computerWins;
            break;
        case (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") :
            return "It's a draw! Try again!";
            break;
        case (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") :
            computerWins++;
            // console.log("You lose! Rock beats scissors");
            console.log(computerWins, "computer Wins")
            return computerWins;
            break;
        case (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") :
            playerWins++;
            // console.log("You win! Scissors beats paper");
            console.log(playerWins, "player Wins");
            return playerWins;
            break;
        case (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") :
            return "It's a draw! Try again!";
            break;
    }

}


const winnerTime = () => {
    
    if(playerWins == 5) {
        console.log(playerWins, 'Player WINS SCORE');
        winner.innerText = "PLAYER";
    } else if(computerWins == 5) {
        winner.innerText = "COMPUTER";    
    } else {
        winner.innerText = "";
    }23
}



// function game() {
//     for (let i=0; i<5; i++) {
//         // const playerSelection = "";
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(playerSelection, "playerS")
//         console.log(computerSelection, "computerS")
//         console.log(playerWins, "player");
//         console.log(computerWins, "computer")
//     }
//     switch(true) {
//         case (playerWins > computerWins) :
//             console.log("Player is the winner!");
//             break;
//         case (playerWins == computerWins) :
//             console.log("It's a draw");
//             break;
//         case (playerWins < computerWins) :
//             console.log("Computer is the winner!");
//     }
// }

// game();

// const oneRound = () => {
//     const computerSelection = computerPlay();

    // console.log(playRound(playerSelection, computerSelection));
    //     console.log(playerSelection, "playerS")
    //     console.log(computerSelection, "computerS")
    //     console.log(playerWins, "player");
    //     console.log(computerWins, "computer")

// }