/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const splitedNum = num.split('');
    let lastOddIdx = -1;
    for(let i = splitedNum.length-1; i >= 0; i--){
        if(splitedNum[i] % 2 === 1){
            lastOddIdx = i;
            break;
        }
    }

    if(lastOddIdx === -1) return '';
    return splitedNum.slice(0, lastOddIdx + 1).join('');
};