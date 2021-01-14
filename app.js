import {
    getRandomThrow,
    didUserWin
} from './get-random-throw.js'

const shootButton = document.getElementById('shoot-button');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const drawSpan = document.getElementById('draw-span');
const throwResults = document.getElementById('throw-results');

let wins = 0;
let losses = 0;
let draws = 0;

shootButton.addEventListener('click', () => {
    const compThrow = Math.floor(Math.random() * 3) + 1;
    const rockPaperScissors = getRandomThrow(compThrow);
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userPlay = selectedRadioButton.value;

    compareThrows(userPlay, rockPaperScissors);

    updateResultsSpans();

});

function compareThrows(userPlay, rockPaperScissors) {
    if (didUserWin(userPlay, rockPaperScissors) === 'win') {
        wins++;
        throwResults.textContent = `Awesome! You chose ${userPlay} and the computer chose ${rockPaperScissors} so you won!`;
    } else if (didUserWin(userPlay, rockPaperScissors) === 'lose') {
        losses++;
        throwResults.textContent = `Oh darn! ${rockPaperScissors} beats ${userPlay}. Better luck next time!`;
    } else {
        draws++;
        throwResults.textContent = `So close! You and the computer both guessed ${userPlay}, so it's a draw!`;
    }
}

function updateResultsSpans() {
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    drawSpan.textContent = draws;
}