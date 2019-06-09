// get dom documents
//var payoutOnWin = document.getElementById('dice-profit-input');
var bet = document.getElementById('dice-bet');

var resultSpin = document.getElementsByClassName("result-spin")[0];
var rollButton = document.getElementsByClassName("start-dice-game")[0];
var dicePercent = document.getElementById('dice-percent');

var lastResultValue = 0;
var consecutiveLoss = 0;
var resultValue = 0;
var intervalId = null;
var betCounter = 0;
var clickCounter = 0;

var winCounter = 0;
var lossCounter = 0;

var profit = 0;

var winAmount = 0;
var lossAmount = 0;

rollButton.addEventListener("click", function () {
    if (clickCounter === 0) {
        startGame();
        console.log('INICIA');
        clickCounter++;
    }
});


function chechBet() {
    resultValue = resultSpin.innerHTML;
    let result;

    if (resultValue < "95") {
        result = true; // WIN
        winAmount += Number(bet.value) + 0.00000316;
        //winAmount += Number(payoutOnWin.value) - Number(bet.value);

        winCounter++;
        consecutiveLoss = 0;
    } else {
        result = false; // LOSS
        lossAmount += Number(bet.value);
        lossCounter++;
        consecutiveLoss++;
    }
    profit = winAmount - lossAmount;


    return result
}


function setInitialConfig() {
    // dicePercent.value = '95%';
    // resultValue = resultSpin.innerHTML;
    // bet.value = 0.0001;
    bet.value = 1;
}

function tralla() {
    // read bet result
    resultValue = resultSpin.innerHTML;


    showStatus();

    // tralla
    if (resultValue < "95") {
        console.log('WIN');
        bet.value = 0.1;
    } else {
        switch (consecutiveLoss) {
            case 1:
                bet.value = 2;
                break;
            case 2:
                bet.value = 40;
                break;
            case 3:
                bet.value = 800;
                break;
            case 4:
                bet.value = 15000;
                break;
        }
        console.log('LOSS');
    }

    rollButton.click();
    betCounter++;
    if (betCounter > 200) {
        gameOver();
    }
}


function startGame() {
    setInitialConfig();
    intervalId = setInterval(tralla, 700);
}

function gameOver() {
    clearInterval(intervalId);
    console.log('Game Over');
}

function showStatus() {
    chechBet();
    console.log('PETES \t BET \t RESULT \t BET COUNTER \t WIN COUNTER \t LOSS COUNTER \t WIN AMOUNT \t LOSS AMOUNT \t PROFIT');
    console.log(consecutiveLoss + " \t " + bet.value + " \t " + resultValue + " \t " + betCounter + " \t " + winCounter + " \t " + lossCounter + " \t " + winAmount + " \t " + lossAmount + " \t " + profit);
    // chechBet() ? console.log('WIN') : console.log('LOSS');
}
