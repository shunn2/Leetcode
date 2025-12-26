/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let result = 0;
    let minimumPenalty = 0;
    let temp = 0;
    customers.split('').forEach((customer, index) => {
        temp += customer === 'Y' ? -1 : 1;
        if(temp < minimumPenalty){
            result = index + 1;
            minimumPenalty = temp;
        }
    })
    return result;
};