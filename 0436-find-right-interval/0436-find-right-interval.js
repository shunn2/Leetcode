/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const starts = intervals.map((intv, i) => [intv[0], i]).sort((a, b) => a[0] - b[0]);
    const result = [];

    for (let [start, end] of intervals) {
        let l = 0, r = starts.length - 1, idx = -1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (starts[mid][0] >= end) {
                idx = starts[mid][1];
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        result.push(idx);
    }

    return result;
};