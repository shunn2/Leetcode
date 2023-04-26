/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let res = String(num).split("");
    while(res.length!==1) {
        let temp = 0;
        res.forEach((el)=>{
            temp += Number(el);
        })
        res = String(temp).split("");
    }
    return res[0];
};