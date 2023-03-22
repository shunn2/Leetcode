/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    let res = Infinity;
    const arr = Array.from(Array(n+1), () => []);
    const visited = new Array(n+1).fill(false);
    roads.forEach(el => {
        const [a,b,distance] = el;
        arr[a].push([b, distance]);
        arr[b].push([a, distance]);
    })
    function dfs(node) {
        if(visited[node]) return;
        visited[node] = true;
        for(let edge of arr[node]) {
            res = Math.min(edge[1], res);
            dfs(edge[0]);
        }
    }
    dfs(1);
    return res;
};