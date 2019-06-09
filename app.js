
// get dom documents
let bet = document.getElementById('dice-bet');
let resultSpin = document.getElementsByClassName("result-spin");
let rollButton = document.getElementsByClassName("start-dice-game")[0];

let betValue = bet.value;
let resultValue = resultSpin.item(0).innerHTML;
let intervalId = null;
let betCounter = 0;

startGame();


function rollDice() {
    rollButton.click();
    showStatus();
    betCounter++;

    if (betCounter > 5) {
        gameOver();
    }
}

function startGame() {
    intervalId = setInterval(rollDice, 1000);
}

function gameOver() {
    clearInterval(intervalId);
    console.log('Game Over');
}

function showStatus() {
    console.log('BET: ' + betValue);
    console.log('RESULT: ' + resultValue);
    console.log('BET COUNTER: ' + betCounter)
}
