/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const parts = p.split('*');
    const prefix = parts[0];
    const suffix = parts[1];

    let startIndex = s.indexOf(prefix);
    let endIndex = s.lastIndexOf(suffix);

    if(startIndex === -1 || endIndex === -1){
        return false;
    }
    

    if(startIndex + prefix.length <= endIndex){
        return true;
    }

    return false;
};