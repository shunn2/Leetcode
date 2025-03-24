/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let result = 0;
    let hasOdd = false;

    for (const count of Object.values(charCount)) {
        result += Math.floor(count / 2) * 2;
        // 어차피 홀수는 한 세트만
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    return hasOdd ? result + 1 : result;    
};