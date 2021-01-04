const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const totalScore = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Show messages
function showMessage(text) {
  message.textContent = text;
}

// Check Score
function checkScore() {
  if (score > 1) {
    score--;
    totalScore.textContent = score;
    console.log(score);
  } else {
    showMessage('💥 You Lost The Game!');
    totalScore.textContent = 0;
  }
}

// Check If Number is Correct
function checkNumber() {
  if (guess.value === '') {
    showMessage('⛔ No Number!');
  } else if (+guess.value === randomNumber) {
    document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';
    number.textContent = guess.value;
    number.style.width = '30rem';
    showMessage('Correct Number!');
  } else {
    if (+guess.value > randomNumber) {
      showMessage('Too High!');
      checkScore();
    } else {
      showMessage('Too Low!');
      checkScore();
    }
  }
}

// Event listeners
btnCheck.addEventListener('click', checkNumber);
