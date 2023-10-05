/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const mapping = {}, result = [], len = nums.length
    for (let i = 0; i < len; i++) {
        const value = nums[i]
        mapping[value] = mapping[value] + 1 || 1
    }
    for (const key in mapping) {
        const occurence = mapping[key]
        if (occurence > len / 3) result.push(key)
    }
    return result
};