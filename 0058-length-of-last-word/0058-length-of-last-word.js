/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedS = s.trim();
    
    if(!trimmedS.length) return 0;
    
    const splittedS = trimmedS.split(' ');
    
    return splittedS[splittedS.length - 1].length;
};