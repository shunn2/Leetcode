/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let dp = new Array(n + 1).fill(0).map(x => new Array(m + 1).fill(0));
    
    for (let i = 1; i <= n; i ++) {
        for (let j = 1; j <=m; j++) {
            if(text1.charAt(i - 1) !== text2.charAt(j - 1)) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            } else {
                dp[i][j] = dp[i-1][j-1] + 1
            }
        }
    }
    return dp[n][m]
};