/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;

    let total = 0;
    let curr = 0;

    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            curr += 1;
            total += curr;
        } else {
            curr = 0;
        }
    }
    return total;

};