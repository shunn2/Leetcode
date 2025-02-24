/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end])) {
            start = Math.max(start, charMap.get(s[end]) + 1);
        }
        
        charMap.set(s[end], end);
        
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};