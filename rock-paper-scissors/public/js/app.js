function computerPlay() {
    const randomMove = Math.ceil(Math.random() * 3);
    if (randomMove === 1) {
        return "rock"
    } else if (randomMove === 2) {
        return "paper"
    } else { return "scissors" }
}

function playRound(plSelect, cpSelect) {
    if (plSelect === "rock" && cpSelect === "rock" || plSelect === "paper" && cpSelect === "paper" || plSelect === "scissors" && cpSelect === "scissors") {
        return 0
    } else if (plSelect === "rock" && cpSelect === "scissors" || plSelect === "paper" && cpSelect === "rock" || plSelect === "scissors" && cpSelect === "paper") {
        return 1
    } else { return -1 }
}

function game() {
    let score = {
        player: 0,
        computer: 0
    };
    for (let i = 0; i < 5; i++) {
        let plSelect = prompt("Rock Paper Scissors!").toLowerCase();
        while (plSelect != "rock" && plSelect != "paper" && plSelect != "scissors") {
            plSelect = prompt("Invalid Input! Rock Paper Scissors!").toLowerCase();
        }
        let cpSelect = computerPlay();

        let play = playRound(plSelect, cpSelect);

        if (play === 0) {
            console.log('Draw!');
        } else if (play === 1) {
            console.log(`You win! ${plSelect} beats ${cpSelect}`);
            score.player++;
        } else {
            console.log(`You lose! ${cpSelect} beats ${plSelect}`);
            score.computer++;
        }
        console.log(`Current score: ${score.player}:${score.computer}`);
    }
    console.log(`Game over!`)
    if (score.player === score.computer) {
        console.log('Draw!');
    } else if (score.player > score.computer) {
        console.log('You win!')
    } else {console.log('You lose!');}
}