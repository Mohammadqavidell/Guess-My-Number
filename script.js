"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display secret number for testing (remove in production)
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there's no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number🫡";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    
    // Update highscore if current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // Provide feedback and decrease score
      guess > secretNumber 
        ? document.querySelector(".message").textContent = "Too high🙄!"
        : document.querySelector(".message").textContent = "Too low🙄!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // Game over
      document.querySelector(".message").textContent = "You lost the game😵‍💫!";
      document.querySelector(".score").textContent = 0;
    }
  }
}); // Fixed: Added missing closing brace for check event listener

// Reset game functionality
document.querySelector('.again').addEventListener('click', function() {
  // Reset score and generate new secret number
  score = 20; // Fixed: Removed 'let' to use global variable
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Fixed: Removed 'let'
  
  // Reset UI elements
  document.querySelector(".message").textContent = 'Start guessing...';
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = '';
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  
  // Display new secret number for testing (remove in production)
  document.querySelector(".number").textContent = secretNumber;
});