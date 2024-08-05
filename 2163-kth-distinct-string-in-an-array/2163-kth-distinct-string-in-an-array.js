/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    // Step 1: Count the occurrences of each string
    const count = {};
    for (let str of arr) {
        count[str] = (count[str] || 0) + 1;
    }

    // Step 2: Find the k-th distinct string
    let distinctCount = 0;
    for (let str of arr) {
        if (count[str] === 1) {
            distinctCount += 1;
            if (distinctCount === k) {
                return str;
            }
        }
    }

    // If there are fewer than k distinct strings, return an empty string
    return "";
};

// Example usage
console.log(kthDistinct(["d","b","c","b","c","a"], 2)); // Output: "a"
console.log(kthDistinct(["aaa","aa","a"], 1));         // Output: "aaa"
console.log(kthDistinct(["a","b","a"], 3));            // Output: ""


