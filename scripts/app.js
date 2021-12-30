const squares = document.querySelectorAll('.square');
const restart = document.querySelector('.restart');
const message = document.getElementById('message');
const playerXWinTotal = document.getElementById('x-wins');
const computerOWinTotal = document.getElementById('o-wins');

let turn = 1;
let gameOver = false;
let playerXWinNum = 0;
let computerOWinNum = 0;
let time = 5;
let turnInterval;
let computerDelay;

const winCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', clickSquare);
}

restart.addEventListener('click', resetBoard);

function clickSquare(event) {
    if (!gameOver) {
        if (event.target.innerText) {
            message.innerHTML = `Choose an empty square! <br> You have ${time} seconds to choose...`;
            event.target.style.backgroundColor = '#99a';
            setTimeout(() => event.target.style.backgroundColor = '', 500);
        } else if (turn % 2 === 0) {
            event.target.innerText = 'O';
            clearTimeout(computerDelay);
            if (!checkWin('O')) {
                turn++;
                turnInterval = setInterval(turnTimer, 1000);
            }
        } else {
            event.target.innerText = 'X';
            resetTimer();
            if (!checkWin('X')) {
                turn++;
                message.innerHTML = 'Computer O is up! <br> Choosing a square...';
                computerDelay = setTimeout(randomSquareClick, 2000);
            }
        }
    }
}

function resetBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = '';
        squares[i].style.backgroundColor = '';
        squares[i].style.color = '';
    }
    turn = 1;
    gameOver = false;
    resetTimer();
    message.innerHTML = 'Player X goes first. <br> Computer O goes second.';
}

function checkWin(player) {
    if (turn > 4) {
        for (let i=0; i < winCombos.length; i++) {
            if (squares[winCombos[i][0]].innerText === player && 
                squares[winCombos[i][1]].innerText === player && 
                squares[winCombos[i][2]].innerText === player) {
                    playerWins(player, winCombos[i]);
                    return true;
                }
        }
        if (turn === 9) {
            draw();
            return true;
        }
    } return false;
}

function playerWins(player, winCombo) {
    gameOver = true;
    winCombo.forEach(function(i) {
        squares[i].style.backgroundColor = '#125';
        squares[i].style.color = '#cce';
    })
    if (player === 'X') {
        message.innerHTML = 'Game over! <br> Player X wins!';
        playerXWinNum++;
        playerXWinTotal.innerText = playerXWinNum;
    } else {
        message.innerHTML = 'Game over! <br> Computer O wins!';
        computerOWinNum++;
        computerOWinTotal.innerText = computerOWinNum;
    }
}

function draw() {
    message.innerHTML = "It's a draw! <br> Start Over!";
    gameOver = true;
    squares.forEach((square) => {
        square.style.backgroundColor = '#99a';
    });
}

function randomSquareClick() {
    let openSquares = []
    for (let i = 0; i < squares.length; i++) {
        if (!squares[i].innerText) {
            openSquares.push(squares[i]);
        }
    }
    let randomChoice = openSquares[Math.floor(Math.random() * openSquares.length)];
    randomChoice.click();
}

function turnTimer() {
    message.innerHTML = `Player X, your turn! <br> You have ${time} seconds to choose...`;
    time--;
    if (time < 0) {
        randomSquareClick();
    }
}

function resetTimer() {
    clearInterval(turnInterval);
    setTimeout(() => time = 5, 10);
}
