// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('it should return rock if provided 1', (expect) => {
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
