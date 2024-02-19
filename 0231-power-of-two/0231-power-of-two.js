/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return ~~Math.log2(n) === Math.log2(n);
};