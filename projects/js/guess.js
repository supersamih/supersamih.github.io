'use strict';

/* How the game should work
 1. Generate a secret number between 1-20
 2. Ask user to input a number
 3. Compare number to secret number
    If the no number change message class content to no number
    if number is too low change message class content to too low and -1 from score
    if number is too high change message class content to too high -1 from score
    if number is correct change message to congratz and change background colour
 4. Save score to highscore
 5. Again button can be pressed anytime to reset the whole game including the number

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no guess.
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    // When Player wins.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 1) {
    score--;
    // When guess is too high
    if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'How did you lose this?';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.check').style.display = 'none';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.display = 'block';
});
