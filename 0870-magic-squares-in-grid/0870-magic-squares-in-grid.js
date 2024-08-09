/**
 * @param {number[][]} grid
 * @return {number}
 */
function isMagicGrid(grid, r, c) {
    // uniqueness 1 to 9 and distinct
    let st = new Set();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let num = grid[r + i][c + j];
            if (num < 1 || num > 9 || st.has(num)) {
                return false;
            } else {
                st.add(num);
            }
        }
    }
    // check sum - Rows and Columns
    let Sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];
    for (let i = 0; i < 3; i++) {
        // for row
        if (grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] != Sum) {
            return false;
        }
        // for col
        if (grid[r][c + i] + grid[r + 1][c + i] + grid[r + 2][c + i] != Sum) {
            return false;
        }
    }
    // diagonals and anti - disgonals;
    if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] != Sum) {
        return false;
    }
    // anti - diagonal
    if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] != Sum) {
        return false;
    }

    return true;
}

var numMagicSquaresInside = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let count = 0;

    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            if (isMagicGrid(grid, i, j)) {
                count++;
            }
        }
    }
    return count;
};