let squares = document.querySelectorAll('.square');
let restart = document.querySelector('.restart');
let message = document.getElementById('message');

let turn = 1;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', addXO);
}

restart.addEventListener('click', clearBoard);

function addXO(event) {
    if (event.target.innerHTML) {
        message.innerHTML = 'Choose an empty square!';
    } else if (turn % 2 === 0) {
        event.target.innerHTML = 'O';
        turn++;
        message.innerHTML = 'Player X, your turn!';
    } else {
        event.target.innerHTML = 'X';
        turn++;
        message.innerHTML = 'Player O, your turn!';
    }
    console.log('Called');
}

function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
    message.innerHTML = 'Player X goes first, Player O second.'
}


