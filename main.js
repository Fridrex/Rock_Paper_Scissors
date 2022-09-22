function random(number) {
    return Math.floor(Math.random() * number);
  }

function getComputerChoice() {
    let option = random(3);

    switch (option) {
        case 0:
            return 'Rock'
            break;
        case 1:
            return 'Paper'
            break;
        case 2:
            return 'Scissors'
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock.'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors.'
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'The game is tie!'
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'The game is tie!'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock.'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper.'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors.'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Papaer.'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'The game is tie!'
    }
}

let playerSelection = '';
const computerSelection = getComputerChoice();


let playerScores = 0;
let pcScores = 0;  

const btn = document.getElementsByName('button');