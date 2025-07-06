/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const n = nums.length;

    const backtrack = (arr, idx) => {
        if(idx === n){
            result.push([...arr]);
            return;
        }
        arr.push(nums[idx]);
        backtrack(arr, idx+1);

        arr.pop();

        backtrack(arr, idx + 1);
    }

    backtrack([], 0);

    return result;
};