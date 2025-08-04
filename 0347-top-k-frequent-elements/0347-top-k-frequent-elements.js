/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]] = map[nums[i]] + 1;
        }else{
            map[nums[i]] = 1;
        }
    }

    const sortedMap = [...Object.entries(map).sort((a, b) => b[1] - a[1])];

    return sortedMap.slice(0, k).map((val) => Number(val[0]))
};