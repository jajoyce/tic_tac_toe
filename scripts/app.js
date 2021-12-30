const squares = document.querySelectorAll('.square');
const restart = document.querySelector('.restart');
const message = document.getElementById('message');
const playerXWinTotal = document.getElementById('x-wins');
const playerOWinTotal = document.getElementById('o-wins');

let turn = 1;
let gameOver = false;
let playerXWinNum = 0;
let playerOWinNum = 0;

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
            message.innerText = 'Choose an empty square!';
        } else if (turn % 2 === 0) {
            event.target.innerText = 'O';
            if (!checkWin('O')) {
                turn++;
                message.innerText = 'Player X, your turn!';
            }
        } else {
            event.target.innerText = 'X';
            if (!checkWin('X')) {
                turn++;
                message.innerText = 'Player O, your turn!';
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
    message.innerText = 'Player X goes first, Player O second.'
}

function checkWin(player) {
    if (turn > 4) {
        for (let i=0; i < winCombos.length; i++) {
            if (squares[winCombos[i][0]].innerText === player && 
                squares[winCombos[i][1]].innerText === player && 
                squares[winCombos[i][2]].innerText === player) {
                    playerWins(player, winCombos[i])
                    return true;
                }
        }
        if (turn === 9) {
            draw()
            return true;
        }
    } return false;
}

function playerWins(player, winCombo) {
    message.innerText = `Game over, Player ${player} wins!`
    gameOver = true;
    winCombo.forEach(function(i) {
        squares[i].style.backgroundColor = '#125';
        squares[i].style.color = '#cce';
    })
    if (player === 'X') {
        playerXWinNum++;
        playerXWinTotal.innerText = playerXWinNum;
    } else {
        playerOWinNum++;
        playerOWinTotal.innerText = playerOWinNum;
    }
}

function draw () {
    message.innerText = "It's a draw! Start Over!"
    gameOver = true;
    squares.forEach((square) => {
        square.style.backgroundColor = '#99a'
    })
}