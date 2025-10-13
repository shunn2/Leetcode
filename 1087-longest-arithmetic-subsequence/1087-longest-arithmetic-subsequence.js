/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }

    const dp = Array.from({ length: n }, () => new Map());
    let ans = 2;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const d = nums[i] - nums[j];
            const prev = dp[j].get(d) ?? 1;
            const curr = prev + 1;
            if ((dp[i].get(d) ?? 0) < curr) {
                dp[i].set(d, curr);
            }
            if (ans < curr) {
                ans = curr;
            }
        }
    }
    return ans;
};