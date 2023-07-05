// generates a random number between 1-3 and assigns it to (rock, paper, scissor)
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
  
    if (choice === 1) {
      return "rock";
    } else if (choice === 2) {
      return "paper";
    } else if (choice === 3) {
      return "scissors";
    }
  }

// compares computers choice with players and updates score based on outcome
function playGame(playerChoice, compChoice) {
    let result = "";

    if (playerChoice === compChoice) {
        result = "Draw!";
      } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")
      ) {
        result = "You Win!";
      } else {
        result = "You Lose!";
      }

    updateScores(result);
    
    // check for endgame
    if (playerScore === 5) {
        setTimeout(function () {
          endGame("Player");
        }, 1);
      } else if (compScore === 5) {
        setTimeout(function () {
          endGame("Computer");
        }, 1);
      }
}

// create variables to keep track of scores
let playerScore = 0;
let compScore = 0;

// update scores and check for endgame
function updateScores(result) {
    if (result === "You Win!") {
        playerScore++;
    } else if (result === "You Lose!") {
        compScore++;
    }
    // updates score on the html page
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("comp-score").textContent = compScore;
}

// run the game when a button is clicked
function buttonClicked(playerChoice) {
    const compChoice = getComputerChoice();
    playGame(playerChoice, compChoice)
}

// resets game
function resetGame () {
    playerScore = 0;
    compScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("comp-score").textContent = compScore;
}

// ends game and alerts the player
function endGame(winner) {
    alert(winner + " Wins!");
    resetGame();
}

// add appropriate eventListeners to each button
document.addEventListener("DOMContentLoaded", function(e) {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");

    btn1.addEventListener("click", function () {
        buttonClicked("rock");
    });
    btn2.addEventListener("click", function () {
        buttonClicked("paper");
    });
    btn3.addEventListener("click", function () {
        buttonClicked("scissors");
    });
});