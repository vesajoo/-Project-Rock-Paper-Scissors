let computerChoice;
let rps = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let playerScore = 0;
let tie = 0;
let playerSelection;
let computerSelection;
let playerImg = document.getElementById("playerGame");
let computerImg = document.getElementById("computerGame");
document.getElementById("score").innerHTML = "Your score: " + playerScore + "<br>Computer score: " + compScore + "<br>Ties: " + tie;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        playerSelection = button.value;
        if(playerSelection == "Rock"){
            playerImg.src = "svg/rock.svg";
        }else if(playerSelection == "Paper"){
            playerImg.src = "svg/paper.svg";
        }else if(playerSelection == "Scissors"){
            playerImg.src = "svg/scissors.svg";
        };
        playGame();
    });
});

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * rps.length);
    if(rps[computerChoice] == "Rock"){
        computerImg.src = "svg/rock.svg";
    }else if(rps[computerChoice] == "Paper"){
        computerImg.src = "svg/paper.svg";
    }else if(rps[computerChoice] == "Scissors"){
        computerImg.src = "svg/scissors.svg";
    };
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


function playGame(){
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + compScore);
    console.log("Ties: " + tie);
    document.getElementById("score").innerHTML = "Your score: " + playerScore + "<br>Computer score: " + compScore + "<br>Ties: " + tie;
    if(playerScore == 5){
        playerImg.src = "svg/winner.svg";
        computerImg.src = "svg/loser.svg";
        alert("You won!");
        playerScore = 0;
        compScore = 0;
        tie = 0;
    }else if(compScore == 5){
        computerImg.src = "svg/winner.svg";
        playerImg.src = "svg/loser.svg";
        alert("You lost!");
        playerScore = 0;
        compScore = 0;
        tie = 0;
    }
}





