function playRound() {
    
    let computerChoice;
    
function getComputerChoice() {
    let randomComputerInt = Math.floor(Math.random() * (3 - 1 +1)) +1;
    if (randomComputerInt === 1) {
        computerChoice = 'rock'
    } else if (randomComputerInt === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    console.log(`The computer throws ${computerChoice}!`)
}

getComputerChoice();

let playerChoice = prompt("Rock, Paper, Scissors!")

playerChoice = playerChoice.toLowerCase();

console.log(`The player throws ${playerChoice}!`)


    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return "You win! Rock beats scissors!"
        } else if (computerChoice === 'paper') {
            return "You lose! Paper beats rock!"
        } else {
            return "A tie!"
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return "You win! Scissors beats paper!"
        } else if (computerChoice === 'rock') {
            return "You lose! Rock beats scissors!"
        } else {
            return "A tie!"
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return "You win! Paper beats rock!"
        } else if (computerChoice === 'scissors') {
            return "You lose! Scissors beats paper!"
        } else {
            return "A tie!"
        }
    }
}

function game() {
    for (let i = 0; i<5; i++) {
        console.log(playRound())
    }
}

game()