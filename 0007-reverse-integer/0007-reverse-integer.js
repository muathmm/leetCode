/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    let reversed = 0;
    while (x !== 0) {
        const pop = x % 10;
        x = (x / 10) | 0;  // Using bitwise OR to truncate towards zero

        if (reversed > (INT_MAX / 10) || (reversed === (INT_MAX / 10) && pop > 7)) {
            return 0; // Overflow condition for positive numbers
        }
        if (reversed < (INT_MIN / 10) || (reversed === (INT_MIN / 10) && pop < -8)) {
            return 0; // Overflow condition for negative numbers
        }
        reversed = (reversed * 10) + pop;
    }

    return reversed;
    
};