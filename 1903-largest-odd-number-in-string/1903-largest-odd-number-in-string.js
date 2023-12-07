/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let str = num.toString();
    for(let i = str.length-1; i >= 0; i--){
        if(Number(str[i]) % 2 == 1)
            return str.substring(0,i+1);
    }
    return '';
};