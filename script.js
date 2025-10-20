"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No secretNumber";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number🫡";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if(score>highscore){
      highscore=score;
      document.querySelector('highscore').textContent= highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high🙄!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game😵‍💫!";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Tow low🙄!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
document.querySelector('.again').addEventListener('click',function(){
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".message").textContent = 'Start guessing...';
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent = '?';
document.querySelector(".guess").value = '';
document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".number").style.width = "15rem";
});
