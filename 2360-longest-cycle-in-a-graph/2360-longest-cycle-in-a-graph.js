/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    function dfs(node,path,visited,edges){
        if(node==-1) return -1;
        let count=-1;
        if(visited[node]){

            for(let i=0;i<path.length;i++){
                if(path[i]==node){
                    count=Math.max(count,path.length-i);
                    break;
                }
            }
            return count;
        }
        visited[node]=1;
        path.push(node);
        let res=dfs(edges[node],path,visited,edges);
        path.pop();
        return Math.max(res,count);
    }
    let visited=Array(edges.length).fill(0);
    let path=[];
    let ans=-1;
    for(let i=0;i<edges.length;i++){
        if(!visited[i]){
            let res=dfs(i,path,visited,edges);
            ans=Math.max(ans,res);
        }
    }
    
    return ans;
};