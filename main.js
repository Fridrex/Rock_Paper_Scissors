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

console.log(getComputerChoice())