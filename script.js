function getComputerChoice() {
    let randomChoice = Math.floor( Math.random() * 3)

    switch (randomChoice) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}

function playRound( humanChoice, computerChoice ) {
    if ( humanChoice === computerChoice ) {
        document.querySelector('.result').innerHTML = `It's a tie for ${humanChoice} and ${computerChoice}!`
    } else if ( humanChoice === 'rock' && computerChoice === 'paper' 
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
        computerScore++
        document.querySelector('.computer .score').innerHTML = computerScore
        document.querySelector('.result').innerHTML = `Point for computer with ${humanChoice} vs ${computerChoice}. Too bad.`
    } else {
        humanScore++
        document.querySelector('.human .score').innerHTML = humanScore
        document.querySelector('.result').innerHTML = `Point for you with ${humanChoice} vs ${computerChoice}!`
    }
}

function playGame( humanChoice ) {
    if ( i < 5 ) {
        playRound( humanChoice, getComputerChoice() )
        i++
        document.querySelector('.round span').innerHTML = i

        if ( i === 5 ) {
            playGame( humanChoice )
        }
    } else {
        if ( humanScore > computerScore ) {
            document.querySelector('.result').innerHTML = "You won, buddy! Nice luck"
        } else if ( humanScore < computerScore ) {
            document.querySelector('.result').innerHTML = "You lost, man."
        } else {
            document.querySelector('.result').innerHTML = "Oh well, it's a tie. Refresh to try again!"
        }
    }
}

let humanScore = 0
let computerScore = 0
let i = 1

