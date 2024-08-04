/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    
    // Initialize a 2D dp array with false
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    // Empty string matches with empty pattern
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, a*b*c* which can match an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2]; // Zero occurrence of the character before *
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrences of the character before *
                }
            }
        }
    }
    
    return dp[m][n];
    
    
};