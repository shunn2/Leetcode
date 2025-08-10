/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const currentPartition = [];
    
    function isPalindrome(str, start, end) {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    
    function backtrack(start) {
        if (start === s.length) {
            result.push([...currentPartition]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                currentPartition.push(s.substring(start, end + 1));
                backtrack(end + 1);
                currentPartition.pop();
            }
        }
    }
    
    backtrack(0);
    return result;
};