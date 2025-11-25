/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const stack = [];
    stack[0] = 0;
    let maxLen = 0;

    for (const line of input.split('\n')) {
        const depth = line.lastIndexOf('\t') + 1;
        const name = line.slice(depth);
        const curLen = stack[depth] + name.length + (depth === 0 ? 0 : 1);

        if (name.includes('.')) {
            if (curLen > maxLen){
                maxLen = curLen;
            } 
        }else {
            stack[depth + 1] = curLen;
        }
    }

    return maxLen;
};