/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let currentStr = '';
    let currentNum = 0;

    for (const ch of s) {
        if (!isNaN(ch)) {
            currentNum = currentNum * 10 + Number(ch);
        } else if (ch === '[') {
            stack.push([currentStr, currentNum]);
            currentStr = '';
            currentNum = 0;
        } else if (ch === ']') {
            const [prevStr, num] = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += ch;
        }
    }

    return currentStr;
};