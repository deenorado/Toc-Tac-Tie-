const game = () => {
    let turn = "X";
    let board = new Array(9).fill(null);
    
    const thankYouNext = () => {
        turn = (turn === "X" ? "O" : "X");
    }

    const saSageyo = (i) => {
        if (!isItStillOn()) {
            return;
        }
        
        if (board[i]) {
            return;
        }

        board[i] = turn;
        
        if (!areYaWinningSon()) {
            thankYouNext();
        }
    }

    const clickityClack = (i) => {
        saSageyo(i);
    }
    
    const areYaWinningSon = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for (const combo of winningCombos) {
            const [a, b, c] = combo;

            if (board[a] && (board[a] === board[b] && board[a] === board[c])) {
                return combo;
            }
        }

        return null;
    }

    const isItStillOn = () => {
        return !areYaWinningSon() && board.includes(null);
    }

    return { turn, board, thankYouNext, saSageyo, clickityClack, areYaWinningSon, isItStillOn }
};


const player = (name) => {
    const getName = () => name;
    return { name };
}

const layout = (() => {

});

const cells = document.querySelectorAll("[data-boardcell]");

cells.forEach(cell => {
    cell.addEventListener("click", console.log(`Clicked cell: ${cell.dataset.index}`));
});