/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
    const n = grid.length;
    let islandId = 2;
    const islandSizes = { 0: 0 };
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];

    function dfs(x, y, id) {
        let stack = [[x, y]];
        grid[x][y] = id;
        let size = 0;
        
        while (stack.length) {
            let [i, j] = stack.pop();
            size++;
            for (let [dx, dy] of directions) {
                let ni = i + dx, nj = j + dy;
                if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] === 1) {
                    grid[ni][nj] = id;
                    stack.push([ni, nj]);
                }
            }
        }
        return size;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                islandSizes[islandId] = dfs(i, j, islandId);
                islandId++;
            }
        }
    }

    let maxIsland = Math.max(...Object.values(islandSizes));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let seen = new Set();
                let newSize = 1;
                for (let [dx, dy] of directions) {
                    let ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] > 1) {
                        let id = grid[ni][nj];
                        if (!seen.has(id)) {
                            newSize += islandSizes[id];
                            seen.add(id);
                        }
                    }
                }
                maxIsland = Math.max(maxIsland, newSize);
            }
        }
    }

    return maxIsland;
}