/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    const dp = Array.from({ length: k + 1 }, () => Array.from({ length: n }, () => Array(n).fill(0)));

    dp[0][row][column] = 1;

    for (let step = 1; step <= k; step++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (const [dx, dy] of dirs) {
                    const prevX = i - dx;
                    const prevY = j - dy;
                    if (prevX >= 0 && prevX < n && prevY >= 0 && prevY < n) {
                        dp[step][i][j] += dp[step - 1][prevX][prevY] / 8;
                    }
                }
            }
        }
    }
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            total += dp[k][i][j];
        }
    }
    return total;
};