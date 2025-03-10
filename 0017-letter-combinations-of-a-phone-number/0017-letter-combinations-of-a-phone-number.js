/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == null || digits.length === 0) return [];

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const res = [];
    const tracking = (i, s) => {
        if (i === digits.length) {
        res.push(s);
        return;
        }

        for (const c of map[digits[i]]) {
        tracking(i + 1, s + c);
        }
    };
    
    tracking(0, '');

    return res;    
};