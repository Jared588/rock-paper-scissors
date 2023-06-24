// generates a random number between 1-3 and assigns it to (rock, paper, scissor)
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "rock";
    }

    if (choice === 2) {
        return "paper";
    }

    if (choice === 3) {
        return "scissors";
    }
}

// compares computers choice with players and returns result based on outcome
function playGame(playerChoice, compChoice) {
    if (playerChoice === "rock" && compChoice === "rock") {     
        return "Draw!";
    }
    else if (playerChoice === "rock" && compChoice === "paper") {
        return "You Lose!";
    }
    else if (playerChoice === "rock" && compChoice === "scissors") {
        return "You Win!";    
    }
    else if (playerChoice === "paper" && compChoice === "rock") {
        return "You Win!";     
    }
    else if (playerChoice === "paper" && compChoice === "paper"){     
        return "Draw!";
    }
    else if (playerChoice === "paper" && compChoice === "scissors"){
        return "You Lose!"; 
    }
    else if (playerChoice === "scissors" && compChoice === "rock"){
        return "You Lose!";
    }
    else if (playerChoice === "scissors" && compChoice === "paper"){
        return "You Win!";
    }
    else if (playerChoice === "scissors" && compChoice === "scissors"){
        return "Draw!";
    }
}

// create variables to keep track of scores
let playerScore = 0
let compScore = 0

do {
    // create a variable that stores the players choice
    let playerChoice = prompt("Rock, Paper, Scissors?: ")
    // make sure it's case insensitive
    playerChoice = playerChoice.toLowerCase()
    // store computers choice in a variable
    let compChoice = getComputerChoice()

    let result = playGame(playerChoice, compChoice)
    if (result === "You Win!") {
        playerScore++
    } else if (result === "You Lose!") {
        compScore++
    }

    // display and update the score
    console.log(result)
    console.log(`You: ${playerScore} || Computer: ${compScore} `)

    // alert the player of the winner (first to 3)
    if (playerScore === 3) {
        alert("You Win!")
    } else if (compScore === 3) {
        alert("You Lose!")
    }   
} while ((playerScore < 3) && (compScore < 3));