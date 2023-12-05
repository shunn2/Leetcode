/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
//     const isOdd = (n) => {
//         return n % 2 === 0 ? false : true;
//     }
//     let result = 0;
//     while(n > 1){
//         let temp = Math.floor(n / 2);
//         result += temp;
//         if(isOdd(n)){
//             n = temp + 1;
//         }else{
//             n = temp;
//         }
//     }
    
//     return result;
    return n - 1;
};