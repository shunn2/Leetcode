/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let result = 1;
    let num = n;
    if(num === 2){
        return 1; 
    }
    if(num === 3){
        return 2;
    }

    while(num > 4){
        result *= 3;
        num -= 3;
    }

    return result * num;
};