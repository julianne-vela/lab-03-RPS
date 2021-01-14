// IMPORT MODULES under test here:
import {
    getRandomThrow,
    didUserWin
}
    from '../get-random-throw.js';

const test = QUnit.test;

test('it should return rock, paper, or scissors when provided 1, 2, & 3, respectively', (expect) => {
    const expected = 'rock';
    const expected2 = 'paper';
    const expected3 = 'scissors';

    const actual = getRandomThrow(1);
    const actual2 = getRandomThrow(2);
    const actual3 = getRandomThrow(3);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

// DRAW TESTS
test('It should display draw if given two identical throws', (expect) => {
    const expected = 'draw';

    const actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

// LOSE TESTS
test('It should display lose if player is rock and computer is paper', (expect) => {
    const expected = 'lose';

    const actual = didUserWin('rock', 'paper');

    expect.equal(actual, expected);
});

test('It should display lose if player is paper and computer is scissors', (expect) => {
    const expected = 'lose';

    const actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});

test('It should display lose if player is scissors and computer is rock', (expect) => {
    const expected = 'lose';

    const actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});

// WIN TESTS
test('It should display win if player is rock and computer is scissors', (expect) => {
    const expected = 'win';

    const actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('It should display win if player is paper and computer is rock', (expect) => {
    const expected = 'win';

    const actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('It should display win if player is scissors and computer is paper', (expect) => {
    const expected = 'win';

    const actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});