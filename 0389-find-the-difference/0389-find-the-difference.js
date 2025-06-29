/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const count = {};

    for (const ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (const ch of t) {
        if (!count[ch]) return ch;
        count[ch]--;
    }
    return Object.keys(count).find(ch => count[ch] < 0);
};