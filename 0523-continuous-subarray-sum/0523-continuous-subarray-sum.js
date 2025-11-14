/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const n = nums.length;

    if (k === 0) {
        for (let i = 0; i < n - 1; i++) {
            if (nums[i] === 0 && nums[i + 1] === 0) {
                return true;
            }
        }
        return false;
    }

    let sum = 0;

    const firstIndexByRemainder = new Map();
    firstIndexByRemainder.set(0, -1);

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        const rem = ((sum % k) + k) % k;

        if (firstIndexByRemainder.has(rem)) {
            const prevIndex = firstIndexByRemainder.get(rem);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            firstIndexByRemainder.set(rem, i);
        }
    }

    return false;
};