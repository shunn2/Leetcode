/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums = nums.sort((a,b)=> a-b)

    let mini = 80000000000

    for(let i=0;i < nums.length- k+1;i++){
        mini = Math.min(mini,nums[i+k-1] - nums[i])
    }
    return mini
};