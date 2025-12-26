/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length - 1;
    const n = obstacleGrid[0].length - 1;

    if (obstacleGrid[0][0] === 1) return 0;
    if (obstacleGrid[m][n]) return 0;

    const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

    const dfs = (x, y) => {
        if (x > m || y > n) return 0;
        if (obstacleGrid[x][y] === 1) return 0;
        if (x === m && y === n) return 1;
        if (memo[x][y] !== -1) return memo[x][y];

        memo[x][y] = dfs(x + 1, y) + dfs(x, y + 1);
        return memo[x][y];
    };

    return dfs(0, 0);
};