/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let count = Array(n+1).fill(0);
    for(let [a, b] of trust){
        count[a] = count[a] - 1;
        count[b] = count[b] + 1;
    }

    for(let i =1; i < count.length; i++){
        if(count[i] == n -1){
            return i;
        }
    }
    return -1
};