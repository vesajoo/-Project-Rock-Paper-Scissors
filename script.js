let computerChoice;
let rps = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let playerScore = 0;
let tie = 0;

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * rps.length);
    return rps[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();


    if(player === computer){
        console.log("Tie!");
        tie += 1;
    }else if(player == "rock"){
        if(computer == "paper"){
            console.log("You Lose! Paper beats rock!");
            compScore += 1;
        }
        if(computer == "scissors"){
            console.log("You win! Rock beats Scissors!");
            playerScore += 1;
        }
    }else if(player == "paper"){
        if(computer == "scissors"){
            console.log("You Lose! Paper beats Rock!");
            compScore += 1;
        }
        if(computer == "rock"){
            console.log("You win! Rock beats Paper!");
            playerScore += 1;
        }
    }else if(player == "scissors"){
        if(computer == "rock"){
            console.log("You Lose! Rock beats Scissors!");
            compScore += 1;
        }
        if(computer == "paper"){
            console.log("You win! Scissors beats Paper!");
            playerScore += 1;
        }
    }
  }

let playerSelection;
let computerSelection;

function game(){
    for(let i=1; i<=5; i++){
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + compScore);
    console.log("Ties: " + tie);
    compScore = 0;
    playerScore = 0;
    tie = 0;
}

game();

