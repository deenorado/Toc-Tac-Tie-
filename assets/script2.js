const gameBoard = () => {
    let board = new Array(9).fill(null);
    const cells = document.querySelectorAll("[data-boardcell]");

    const input = (i) => {
        if (board[i] !== null) {
            return;
        } else {
            board.splice(i, 1, playerStuff().turn);
        }

        playerStuff().getTurn;

        winConditions;
    }

    const gameContinuity = () => {
        if (board.includes(null)) {
            return;
        } else {
            cells.forEach(cell => {
                cell.style.pointerEvents = "none";
            });
        }
    }

    cells.forEach((cell) => {
        cell.addEventListener("click", gameContinuity());
        cell.addEventListener("click", input(cell.dataset.index));
    });

    const winConditions = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [2, 4, 7],
            [3, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (board[a] && (board[a] === board[b] && board[a] === board[c])) {
                return combination;
            } else {
                return null;
            }
        };

    }

    clickEvent();

    return { board, clickEvent };
};

const playerStuff = () => {
    let turn = "X";

    const getTurn = () => {
        (turn === "X" ? "O" : "X");
    };

    return { turn, getTurn };
};

const scoreBoard = () => {
    const playerOne = document.querySelector("#player1");
    const playerTwo = document.querySelector("#player2");

    const updateScore = (player) => {
        if (player === "one") {
            playerOne.innerText++;
        } else if (player === "two") {
            playerTwo.innerText++;
        }
    };

    return { updateScore };
}
