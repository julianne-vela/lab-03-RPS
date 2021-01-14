export function getRandomThrow(compThrow) {
    if (compThrow === 1) {
        return 'rock'
    } else if (compThrow === 2) {
        return 'paper'
    } return 'scissors';
}

export function didUserWin(player, computer) {
    const rockScissorsWin = (player === 'rock' && computer === 'scissors') 
    const paperRockWin = (player === 'paper' && computer === 'rock') 
    const scissorsPaperWin = (player === 'scissors' && computer === 'paper')

    const rockPaperLose = (player === 'rock' && computer === 'paper') 
    const paperScissorsLose = (player === 'paper' && computer === 'scissors') 
    const scissorsRockLose = (player === 'scissors' && computer === 'rock') 
    

    if (rockScissorsWin || paperRockWin || scissorsPaperWin) {
        return 'win'
    } else if (rockPaperLose || paperScissorsLose || scissorsRockLose) {
        return 'lose'
    } else return 'draw'
}





