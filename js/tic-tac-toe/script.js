const Gameboard = (function () {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getBoard = () => board;

    const place = (row, col, playerMark) => {
        if (board[row][col] !== '') return false;
        board[row][col] = playerMark;
        return true;
    };

    const reset = () => {
        board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
        ];
    }

    return { getBoard, place, reset };
})();

function Player(name, mark){
    return { name, mark };
}

const GameController = (
    function (){
        let player1 = Player("Player 1", "X");
        let player2 = Player("Player 2", "O");
        let currentPlayer = player1;
        let gameOver = false;

        const switchPlayer = () => {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
        const getCurrentPlayer = () => currentPlayer;
        const checkGameOver = () => gameOver;

        function checkWinner() {
            board = Gameboard.getBoard();
            const same = (a, b, c) => a != '' && a === b && b === c;
            // rows
            for (let r = 0; r < 3; r++){
                if (same(board[r][0], board[r][1], board[r][2])) return true;
            }
            // columns
            for (let c = 0; c < 3; c++){
                if (same(board[0][c], board[1][c], board[2][c])) return true;
            }
            // diagonals
            if (same(board[0][0], board[1][1], board[2][2])) return true;
            if (same(board[2][0], board[1][1], board[0][2])) return true;

            return false;
        }

        function checkTie() { // board is filled and there is no winner
            board = Gameboard.getBoard();
            for (let r = 0; r < 3; r++){
                for (let c = 0; c < 3; c++){
                    if (board[r][c] === '') return false;
                }
            }
            return !checkWinner();
        }

        function playMove(row, col) {
            if (gameOver) {
                console.log('Game over.')
                return;
            }
            const success = Gameboard.place(row, col, currentPlayer.mark);
            if (!success){
                console.log("Cell taken");
                return;
            }
            if (checkWinner()){
                console.log(`${currentPlayer.name} wins!`);
                gameOver = true;
                return;
            }
            if (checkTie()){
                console.log('TIE!')
                gameOver = true;
                return;
            }

            switchPlayer();
            console.log(`Next turn: ${currentPlayer.name}`)
        }

        const resetGame = () => {
            Gameboard.reset();
            currentPlayer = player1;
            gameOver = false;
            console.log('Game reset!')
        }

        return { playMove, resetGame, getCurrentPlayer, checkGameOver, checkWinner, checkTie };
    }
)();

const DisplayController = (function() {
    const container = document.getElementById('game-container');
    const statusMsg = document.getElementById('status');
    const resetBtn = document.getElementById('reset-btn');

    const updateScreen = () => {
        container.innerHTML = '';

        const board = Gameboard.getBoard();
        const currentPlayer = GameController.getCurrentPlayer();
        if (GameController.checkGameOver()) {
            if (GameController.checkWinner()) statusMsg.textContent = `${currentPlayer.name} wins!`;
            else statusMsg.textContent = "It's a tie!";
        }
        else statusMsg.textContent = `${currentPlayer.name}'s turn`;
        
        board.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                const cellBtn = document.createElement('button');
                cellBtn.classList.add('cell');
                cellBtn.textContent = cell;

                cellBtn.addEventListener('click', () => {
                    GameController.playMove(rowIndex, cellIndex);
                    updateScreen();
                })

                container.appendChild(cellBtn);
            })
        })
    }
    resetBtn.addEventListener('click', () => {
        GameController.resetGame();
        updateScreen();
    })

    updateScreen();
    return { updateScreen };
})();

