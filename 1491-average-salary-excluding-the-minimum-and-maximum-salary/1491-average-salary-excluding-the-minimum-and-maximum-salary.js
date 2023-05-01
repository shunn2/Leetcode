/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sortedSalary = salary.sort((a,b)=>a-b);
    return sortedSalary.reduce((acc, cur, idx) => { 
        if(idx !== 0 && idx !== (salary.length-1)) return acc += cur;
        return acc += 0;
    }, 0) / (salary.length-2);
};