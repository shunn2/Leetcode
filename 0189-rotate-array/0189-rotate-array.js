/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    const ro = k % len;
    const rotated = [...nums.slice(len - ro), ...nums.slice(0, len - ro)];

    nums.splice(0, len, ...rotated);
};