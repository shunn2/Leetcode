/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    // const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    // const dp = Array.from({ length: k + 1 }, () => Array.from({ length: n }, () => Array(n).fill(0)));

    // dp[0][row][column] = 1;

    // for (let step = 1; step <= k; step++) {
    //     for (let i = 0; i < n; i++) {
    //         for (let j = 0; j < n; j++) {
    //             for (const [dx, dy] of dirs) {
    //                 const prevX = i - dx;
    //                 const prevY = j - dy;
    //                 if (prevX >= 0 && prevX < n && prevY >= 0 && prevY < n) {
    //                     dp[step][i][j] += dp[step - 1][prevX][prevY] / 8;
    //                 }
    //             }
    //         }
    //     }
    // }
    // let total = 0;
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         total += dp[k][i][j];
    //     }
    // }
    // return total;

    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    const memo = new Map();
    
    return findProbs(k, row, column);
    
    function findProbs(k, r, c) {
        const key = `${k}#${r}#${c}`;
        
        // base case
        if (isOutOfBound(r, c)) return 0.0; // .0 is for completeness sake. Don't really need it in JavaScript
        if (k === 0) return 1.0;
        if (memo.has(key)) return memo.get(key);
        
        let prob = 0;
        
        for (const [dirX, dirY] of dirs) {
            prob += 0.125 * findProbs(k - 1, r + dirX, c + dirY);
        }
        
        memo.set(key, prob);
        
        return prob;
        
    }
    
    function isOutOfBound(row, col) {
        return row < 0 || col < 0 || row >= n || col >= n;
    }
};