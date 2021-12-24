let squares = document.querySelectorAll('.square');
let restart = document.querySelector('.restart');

let turn = 1;

function addXO(event) {
    if (turn % 2 === 0) {
        event.target.innerHTML = 'O';
    } else {
        event.target.innerHTML = 'X';
    }
    console.log('Called');
    turn++;
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', addXO);
}

function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
}

restart.addEventListener('click', clearBoard);

