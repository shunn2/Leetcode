/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const n = s.length;
    const dp = Array(n).fill(0);

    for(let i=n-2; ~i; --i) {
        let prev = 0;
        for(let j=i+1; j<n; ++j) {
            const cur = dp[j];
            dp[j] = s[i]===s[j] ? prev : Math.min(dp[j], dp[j-1]) + 1;
            prev = cur;
        }
    }
    
    return dp[n-1];
};