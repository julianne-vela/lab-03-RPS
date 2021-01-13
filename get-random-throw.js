export function getRandomThrow(compThrow) {
    if (compThrow === 1) {
        return 'rock'
    } else if (compThrow === 2) {
        return 'paper'
    } return 'scissors';
}

export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'rock') {
        return 'draw'
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose'
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win'
    }
}