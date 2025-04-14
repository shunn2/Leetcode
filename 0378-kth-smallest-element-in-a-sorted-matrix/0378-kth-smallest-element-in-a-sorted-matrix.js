/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    const result = [];
    for(let i = 0; i < n; i++){
        result.push(...matrix[i]);
    }
    result.sort((a,b)=>a-b);

    console.log(result);
    return result[k-1]
};