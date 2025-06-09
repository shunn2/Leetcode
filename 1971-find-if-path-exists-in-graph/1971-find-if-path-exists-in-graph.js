/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = Array.from({ length: n }, () => [])
    const visited = new Array(n).fill(false);
    for(edge of edges){
        const [x , y] = edge;
        graph[x].push(y);
        graph[y].push(x);
    }

    function dfs(node){
        if(node === destination){
            return true
        }
        visited[node] = true;
        for(const t of graph[node]){
            if(!visited[t] && dfs(t)){
                return true;
            }
        }
        return false
    }
    return dfs(source)
};