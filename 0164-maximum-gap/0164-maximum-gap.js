/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    if (minNum === maxNum) return 0;

    const gap = Math.max(1, Math.floor((maxNum - minNum) / (nums.length - 1)));
    const buckets = Array.from({ length: Math.floor((maxNum - minNum) / gap) + 1 }, () => [null, null]);

    for (let num of nums) {
        const i = Math.floor((num - minNum) / gap);
        if (buckets[i][0] === null) {
            buckets[i][0] = buckets[i][1] = num;
        } else {
            buckets[i][0] = Math.min(buckets[i][0], num);
            buckets[i][1] = Math.max(buckets[i][1], num);
        }
    }

    let maxGap = 0;
    let prevMax = minNum;
    for (let [minVal, maxVal] of buckets) {
        if (minVal !== null) {
            maxGap = Math.max(maxGap, minVal - prevMax);
            prevMax = maxVal;
        }
    }

    return maxGap;
};