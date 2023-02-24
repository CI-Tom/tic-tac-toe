window.addEventListener("DOMContentLoaded", () => {
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const playerDisplay = document.getElementsByClassName(".display-player");
    const resetBtn = document.getElementById("#reset");

    const PLAYERX_WINS = "PLAYERX_WINS";
    const PLAYERO_WINS = "PLAYERO_WINS";
    const NO_WINNER = "DRAW"

    /*  Board Indexes
          [0][1][2]
          [3][4][5]
          [6][7][8]
    */

    let gameArea = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameActive = true;

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function validateResult() {
        let gameWon = false;
        for (let i=0; i<=7; i++) {
            const winningCondition = winConditions[i];
            const a = gameArea[winningCondition[0]];
            const b = gameArea[winningCondition[1]];
            const c = gameArea[winningCondition[2]];
            if (a === "" || b === "" || c === "") {
                continue;
            }
            if (a === b && b === c) {
                gameWon = true;
                break;
            }
        }
    }

});