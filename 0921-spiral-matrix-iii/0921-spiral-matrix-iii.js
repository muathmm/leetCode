/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [
        [0, 1],   // move right (east)
        [1, 0],   // move down (south)
        [0, -1],  // move left (west)
        [-1, 0]   // move up (north)
    ];

    let result = [];
    let steps = 1;
    let directionIndex = 0;

    result.push([rStart, cStart]);

    while (result.length < rows * cols) {
        for (let i = 0; i < 2; i++) { // Change direction every two iterations
            for (let j = 0; j < steps; j++) {
                rStart += directions[directionIndex][0];
                cStart += directions[directionIndex][1];

                if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                    result.push([rStart, cStart]);
                }
            }
            directionIndex = (directionIndex + 1) % 4; // Cycle through directions
        }
        steps++;
    }

    return result;
};