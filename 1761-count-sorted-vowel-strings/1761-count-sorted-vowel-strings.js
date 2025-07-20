/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let res = 1;
    for (let i = 1; i <= 4; i++) {
        res *= (n + 5 - i) / i;
    }
    return Math.round(res);
};