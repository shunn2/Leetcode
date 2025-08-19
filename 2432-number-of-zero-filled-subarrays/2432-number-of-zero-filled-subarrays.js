/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0;
    let cnt = 0;
    nums.forEach((num)=>{
        if(num === 0 ) cnt++;
        else if(num !== 0) {
            res += (1 + cnt) * (cnt / 2);
            cnt = 0;
        }
    })
    res += (1 + cnt) * (cnt / 2);
    return res
};