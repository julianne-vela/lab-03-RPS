// import functions and grab DOM elements


const shootButton = document.getElementById('shoot-button');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const drawSpan = document.getElementById('draw-span');
const roundResults = document.getElementById('round-results');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;



// set event listeners to update state and DOM

shootButton.addEventListener('click', () => {
    const compThrow = Math.floor(Math.random() * 3) + 1;
    const rockPaperScissors = getRandomThrow(compThrow);
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userPlay = selectedRadioButton.value;

    if (userPlay === compThrow) {
        draws++
        roundResults.textContent = `Nice! You chose ${userPlay} and the computer chose ${rockPaperScissors} so it's a draw!`;

    }
});