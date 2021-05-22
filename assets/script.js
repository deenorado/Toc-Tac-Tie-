const gameBoard = (() => {
  let cells = document.querySelectorAll("[data-boardcell]");
  let cellsArray = Array.from(cells);
  let board = new Array(9).fill(null);
  let playerTurn = 0;
  let scoreFirst = document.querySelector("#player1");
  let scoreSecond = document.querySelector("#player2");

  // Click functionality for individual cell blocks
  const clickCell = () => {
    cellsArray.forEach((cell) =>
      cell.addEventListener("click", (e) => {
        let div = document.createElement("div");
        if (checkDuplicate(e.target) === true) {
          return;
        } else {
          if (playerTurn === 0) {
            cell.classList.toggle("cell-x");
            div.classList.toggle("div-x");
            div.innerText = "X";
            cell.appendChild(div);
          } else if (playerTurn === 1) {
            cell.classList.toggle("cell-o");
            div.classList.toggle("div-o");
            div.innerText = "O";
            cell.appendChild(div);
          }
          boardEquivalent();
          determineTie();
          winning();
          getTurn();
        }
      })
    );
  };

  // Assign values to individual cells on board using 2d array
  const boardEquivalent = () => {
    cellsArray.forEach((cell) => {
      if (cell.classList.contains("cell-x")) {
        board[cellsArray.indexOf(cell)] = "X";
      } else if (cell.classList.contains("cell-o")) {
        board[cellsArray.indexOf(cell)] = "O";
      } else {
        board[cellsArray.indexOf(cell)] = null;
      }
    });
  };

  // Determine turn
  const getTurn = () => {
    playerTurn = playerTurn === 0 ? 1 : 0;
  };

  // Prevent duplicate cell clicks
  const checkDuplicate = (cell) => {
    return cell.innerHTML ? true : false;
  };

  // Checks for a tie game
  const determineTie = () => {
    let boardContents = board.filter(() => null);
    return !boardContents
      ? console.log("This board isn't empty")
      : console.log("This board is empty");
  };

  // Check winning combos
  const winning = () => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombination) {
      let [a, b, c] = combination;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === "X") {
          console.log("X Wins!");
        } else if (board[a] === "O") {
          console.log("O wins!");
        }
        resetGame();
      }
    }
  };

  // Resets the cells
  const resetGame = () => {
    cells.forEach((cell) => {
      cell.innerHTML = "";
      if (cell.classList.contains("cell-x")) {
        cell.classList.toggle("cell-x");
      } else if (cell.classList.contains("cell-o")) {
        cell.classList.toggle("cell-o");
      }
    });
    playerTurn = 0;
    resetBoard();
  };

  // Resets the board
  const resetBoard = () => {
    board.fill(null);
  };

  clickCell();

  return {
    boardEquivalent,
    board,
    cells,
    winning,
    playerTurn,
    getTurn,
    determineTie,
  };
})();
