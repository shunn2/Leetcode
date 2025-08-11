/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const n = quiet.length;
    const g = Array.from({length: n}, ()=>[]);
    const answer = Array(n).fill(-1);
    for(const [a, b] of richer){
        g[b].push(a);
    }
    function dfs(p){
        if(answer[p] !== -1){
            return answer[p];
        }
        answer[p] = p;
        for(const richer of g[p]){
            const man = dfs(richer);
            if(quiet[man] < quiet[answer[p]]){
                answer[p] = man;
            }
        }
        return answer[p];
    }
    for(let i = 0; i < n; i++){
        dfs(i);
    }

    return answer;
};