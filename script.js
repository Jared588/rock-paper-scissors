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
        highlightScore(document.getElementById("p-score"), 'orange');
        highlightScore(document.getElementById("c-score"), 'orange');
      } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")
      ) {
        result = "You Win!";
        highlightScore(document.getElementById("p-score"), 'green');
      } else {
        result = "You Lose!";
        highlightScore(document.getElementById("c-score"), 'red');
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
    var buttons = document.querySelectorAll(".btn"); // select all buttons with class .btn
  
    buttons.forEach(function(button) { // loop over each one, adding eventListeners
      button.addEventListener("click", function() {
        var choice = button.dataset.choice; // use dataset.choice to distinguish each button (refer to html)
        buttonClicked(choice);
      });
  
      button.addEventListener("mouseover", function() {
        highlightImage(button);
      });
  
      button.addEventListener("mouseout", function() {
        removeHighlight(button);
      });
    });
  });

function highlightImage(btn) {
    btn.classList.add('highlight');
}

function removeHighlight(btn) {
    btn.classList.remove('highlight');
}

function highlightScore(target, color) {
  target.classList.add('score-highlight-' + color);
  setTimeout(function() {
    target.classList.remove('score-highlight-' + color);
  }, 500);
}