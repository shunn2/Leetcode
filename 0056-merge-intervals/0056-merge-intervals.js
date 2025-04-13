/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    const result = [intervals[0]];
    let index = 1;
    for(; index < intervals.length;){
        const [a, b] = result[result.length - 1];
        const [c, d] = intervals[index];
        if(b >= c){
            const min = a;
            const max = d;
            if(b > d){
                result[result.length - 1] = [a, b];
            }else{
                result[result.length - 1] = [a, d];
            }
        }else{
            result.push(intervals[index]);
        }
        index++;
    }
    return result;
};