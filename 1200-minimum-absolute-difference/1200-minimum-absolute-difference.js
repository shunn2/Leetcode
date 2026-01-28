/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let min = Infinity;
    const result = []
    for(let i = 0; i < arr.length - 1; i++){
        const tmp = arr[i + 1] - arr[i];
        if(min > tmp){
            min = tmp;
            result.length = 0;
            result.push([arr[i], arr[i + 1]]);
        }else if(min === tmp){
            result.push([arr[i], arr[i + 1]]);
        }
    }
    return result;
};