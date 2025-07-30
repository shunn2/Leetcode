/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    let result = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0;

        if (result > Math.trunc(INT_MAX / 10) || (result === Math.trunc(INT_MAX / 10) && digit > 7)) return 0;

        if (result < Math.trunc(INT_MIN / 10) || (result === Math.trunc(INT_MIN / 10) && digit < -8)) return 0;
            
        result = result * 10 + digit;
    }

    return result;
};