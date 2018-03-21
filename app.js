const btn = document.querySelector('.Startbutton');
const flag = document.querySelectorAll('.flag img');
const timeEl = document.getElementById('timer');
const start = document.getElementById('game-start');
const gameover = document.getElementById('game-over');
const lostlives = document.querySelector('.lives img');
const restartgame = document.getElementById('restart');
const contflag = document.querySelector('.flag');
const score = document.querySelector('.numberscore');
let countryfind;
let countries = [];

refreshflags();
btn.addEventListener('click', function() {
  startGame();
});

function startGame() {
  setInterval(() => {
    let time = timeEl.innerText;
    if (time === '0') {
      gameover.classList.add('is-open');
    } else {
      timeEl.innerHTML = time - 1;
    }
  }, 1000);

  start.classList.remove('is-open');
}

function refreshflags() {
  countries = [];

  for (let i = 0; i < flag.length; i++) {
    const flagIndex = Math.floor(Math.random() * flags.length);
    flag[i].setAttribute('src', 'flags/' + flags[flagIndex].code + '.svg');
    countries.push(flags[flagIndex]);
    flag[i].addEventListener('click', doClick);
  }

  const i = Math.floor(Math.random() * flag.length);
  countryfind = countries[i];
  const titlecountries = document.getElementById('nameflag');
  titlecountries.innerHTML = countryfind.name;
}

function doClick(event) {
  const name = event.target
    .getAttribute('src')
    .split('/')[1]
    .split('.')[0];

  if (name === countryfind.code) {
    timeEl.innerHTML = +timeEl.innerText + 3;
    score.innerHTML = +score.innerHTML + 1;

    if (timeEl.innerHTML > 30) {
      timeEl.innerText = 30;
    }

    for (let i = 0; i < flag.length; i++) {
      flag[i].removeEventListener('click', doClick);
    }

    refreshflags();

    console.log('trouver');
  } else {
    console.log('perdu ');
  }
}

restartgame.addEventListener('click', function() {
  startGame();
});
