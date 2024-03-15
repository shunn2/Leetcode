/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let p = [];
    nums.reduce((sum, value) => {
         p.push(sum);
        sum *= value;
        return sum 
    }, 1);
  
   p.reduceRight((sum, value, index) => {
        p[index] = p[index] * sum;
        sum *= nums[index];
        return sum 
    }, 1);
     
    return p;
};