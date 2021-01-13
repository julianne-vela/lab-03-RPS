export function getRandomThrow(compThrow) {
    if (compThrow === 1) {
        return 'rock'
    } else if (compThrow === 2) {
        return 'paper'
    } return 'scissors';
}

export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'scissors') {
        return 'win'
    } else if (player === 'paper' && computer === 'rock') {
        return 'win'
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win'
    }
}