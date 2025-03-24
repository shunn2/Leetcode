/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(remaining, combination, start) {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }

        if (remaining < 0) return;

        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(remaining - candidates[i], combination, i);
            combination.pop();
        }
    }

    backtrack(target, [], 0);
    return result; 
};