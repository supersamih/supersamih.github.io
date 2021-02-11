'use strict';
let currentScore, activePlayer, scores, playing;
//selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
// both work the same getELementById is faster for bigger projects

function init() {
  //state variables
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  // display elements
  diceElement.classList.add('hidden');
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
}
init();

//toggle function
function togglePlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}
rollBtn.addEventListener('click', function () {
  if (playing) {
    // random number
    const randNum = Math.trunc(Math.random() * 6) + 1;
    // remove hidden class
    diceElement.classList.remove('hidden');
    //change image
    diceElement.src = `dice-${randNum}.png`;
    if (randNum !== 1) {
      // add score to current
      currentScore += randNum;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      togglePlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  // add current score to active players score
  // check if score is 100
  // switch or finish game
  // using our score keeping array
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if score is 100
    if (scores[activePlayer] > 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      togglePlayer();
    }
  }
});

newBtn.addEventListener('click', init);
