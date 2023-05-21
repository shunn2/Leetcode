/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const queue = [];
    let steps = 1;
    const dirs = [[1,0], [-1, 0], [0, 1], [0, -1]];
    let hasFind = false
    
    for (let i = 0; i < row; i++) {
        if (hasFind) break
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j)
                hasFind = true
                break
            }
        }
    }
    
    function dfs(i, j){
        if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] !== 1) return;
        
        queue.push([i, j]);
        grid[i][j] = '*';
        
        for (const dir of dirs){
            dfs(i + dir[0], j + dir[1]);
        }
    } 
    
    while(!!queue.length){
        let length = queue.length; 
        for (let i = 0; i < length; i++){
            const [i, j] = queue.shift();
            for (const dir of dirs){
                const newI = i + dir[0];
                const newJ = j + dir[1];
                
                if (newI < 0 || newJ < 0 || newI >= row || newJ >= col || grid[newI][newJ] === '*')                    continue;
                
                if (grid[newI][newJ] === 1){
                    return --steps;
                }
                
                queue.push([newI, newJ]);
                grid[newI][newJ] = '*';
            }
        }
        steps++;
    }
};