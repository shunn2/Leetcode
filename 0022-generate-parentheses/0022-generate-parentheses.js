/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    if(n===0){
        return result;
    }

    const tracking = (s, left, right) => {
        if(left>n || right>n){
            return;
        }
        if(left === n && right === n){
            return result.push(s);
        }

        tracking(s+'(',left+1,right);
        
        if(right<left){
            tracking(s+')',left,right+1);
        }
    }

    tracking('(',1,0);
    return result;
};