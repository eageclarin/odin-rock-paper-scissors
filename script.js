function getComputerChoice() {
    let randomChoice = Math.floor( Math.random() * 3)

    switch (randomChoice) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}

function getHumanChoice() {
    let humanChoice = String(prompt("What's your bet? "))
    return humanChoice.toLowerCase()
}

function playRound( humanChoice, computerChoice ) {
    if ( humanChoice === computerChoice ) {
        return "It's a tie!"
    } else if ( humanChoice === 'rock' && computerChoice === 'paper' 
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
        computerScore++
        return "Point for computer!"
    } else {
        humanScore++
        return "Point for you!"
    }
}

function playGame() {
    for ( let i=0; i < 5; i++ ) {
        playRound( getHumanChoice(), getComputerChoice() )
    }

    if ( humanScore > computerScore ) {
        console.log("You won!")
    }
    console.log("You lost.")
}

let humanScore = 0
let computerScore = 0

playGame()

