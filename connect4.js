let board = [
    [true, false, false, false, false, true],
    [false, true, false, false, true, false],
    [false, false, true, true, false, false],
    [false, false, true, true, false, false],
    [false, false, false, false, false, false]
];

let winLength = 4;

function isWinning(board) {
  
    for (let i = 0; i < board.length; i++) { // For Loop - Iterate through the rows
        // Check the currnt row
        if (scanRow(board, i)) {
            return true;
        }
    }
	
    for (let j = 0; j < board[0].length; j++) { // For Loop - Iterate through the columns
        // Check the current column
        if (scanColumn(board, j)) {
            return true;
        }
    }  

    for (let i = 0; i < board.length; i++) { // For Loop - Iterate through the left edge
        if (scanDiagonalDownRight(board, i, 0)) {
            return true;
        }
    }

    for (let j = 0; j < board[0].length; j++) { // For Loop - Iterate through the the top edge
        if (scanDiagonalDownRight(board, 0, j)) {
            return true;
        }
        if (scanDiagonalDownLeft(board, 0, j)) {
            return true;
        }
    }

    for (let i = 0; i < board.length; i++) { // For Loop - Iterate through the the right edge
        if (scanDiagonalDownLeft(board, i, board[i].length - 1)) {
            return true;
        }
    }

	return false;
}

function scanRow(board, i) {
    let trueCount = 0;
    for (let j = 0; j < board[i].length; j++) { // Scan through all the cells in the row (all the column indexes)
        if (board[i][j]) {
            trueCount++;
            if (trueCount >= winLength) {
                return true;
            }
        } else {
            trueCount = 0;
        }
    }
    return false;
}

function scanColumn(board, j) {
    let trueCount = 0;
    for (let i = 0; i < board.length; i++) { // Scan through all the cells in the column (all the row indexes)
        if (board[i][j]) {
            trueCount++;
            if (trueCount >= winLength) {
                return true;
            }
        } else {
            trueCount = 0;
        }
    }
    return false;
}

/**
 * Scans a board diagonally (moving down and right) starting from (i, j) until the board edge.
 * If it finds 4 consecutive trues, returns true. Otherwise, returns false.
 */
function scanDiagonalDownRight(board, i, j) {
    let trueCount = 0;
    while (i < board.length && j < board[0].length) { // while we are still in the board
        if (board[i][j]) {
            trueCount++;
            if (trueCount >= winLength) {
                return true;
            }
        } else { 
            trueCount = 0;
        }
        i++;
        j++;
    }
    return false;
}

function scanDiagonalDownLeft(board, i, j) {
    let trueCount = 0;
    while (i < board.length && j >= 0) {
        if (board[i][j]) {
            trueCount++;
            if (trueCount >= winLength) {
                return true;
            }
        } else {
            trueCount = 0;
        }
        i++;
        j--;
    }
    return false;
}

console.log(isWinning(board));