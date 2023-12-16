/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const sStr = s.split('').sort().join('');
    const tStr = t.split('').sort().join('');
    
    if(sStr === tStr) return true;
    else return false;
};