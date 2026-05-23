/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    const arr = [...map.entries()].sort((a, b) => b[1] - a[1]);

    let result = '';
    for(const char of arr){
        result += char[0].repeat(char[1]);
    }
    return result;
};