/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length > 2) {
        let next = '';
        for (let i = 0; i < s.length - 1; i++) {
            const sum = (Number(s[i]) + Number(s[i + 1])) % 10;
            next += sum;
        }
        s = next;
    }

    return s[0] === s[1];
};