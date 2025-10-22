/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let best = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1, r = nums.length - 1;

        while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];

        if (Math.abs(sum - target) < Math.abs(best - target)) best = sum;

        if (sum === target) return target;
        if (sum < target) l++;
        else r--;
        }
    }
    return best;
};