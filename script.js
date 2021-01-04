const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const totalScore = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const resethighScore = document.querySelector('.resetHighScore');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
highscore.textContent = localStorage.getItem('higher') ? localStorage.getItem('higher') : 0;

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

// Check High Score
function checkHighScore() {
  if (score > +localStorage.getItem('higher')) {
    localStorage.setItem('higher', score);
    highscore.textContent = localStorage.getItem('higher');
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
    checkHighScore();
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

function resetHighScore() {
  localStorage.removeItem('higher');
  highscore.textContent = 0;
}

// Event listeners
btnCheck.addEventListener('click', checkNumber);
resethighScore.addEventListener('click', resetHighScore);
btnAgain.addEventListener('click', () => location.reload());
