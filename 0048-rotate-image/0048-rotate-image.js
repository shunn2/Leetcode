/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 44일 때
    //[0,0] -> [0,4]
    //[1,1] -> [1,2]
    //[2,1] -> [1,1]
    //[3,1] -> [1,0]
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};