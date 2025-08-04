/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length; // 가로
    const n = matrix[0].length; // 세로
    const dp = Array.from({ length: m + 1}, () => Array(n + 1).fill(0));
    let max= 0;

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(matrix[i - 1][j - 1] === '1'){
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(dp[i][j], max);
            }
        }
    }

    return max * max;
};