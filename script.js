let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    number = Math.floor(Math.random() * 10);
    return number;
  }
  
  function compareGuesses(humanGuess, computerGuess, targetNumber) {
    /*
    targetNumber = generateTarget();
    */
    const humanDifference = targetNumber - humanGuess;
    const computerDifference = targetNumber - computerGuess;
    if (humanDifference < computerDifference) {
      return true;
    } else if (computerDifference < humanDifference) {
      return false;
    } else {
      return true;
    }
  }
  
  function updateScore(winner) {
    if (winner === 'human') {
      humanScore ++;
    } else if (winner === 'computer'){
      computerScore ++;
    }
  }
  
  function advanceRound() {
    currentRoundNumber ++;
  }  