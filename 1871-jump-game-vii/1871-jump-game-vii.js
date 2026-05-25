/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    if (s.at(-1) === '1') {
        return false;
    }
    const len = s.length;
    const dp = Array(len).fill(false);

    dp[0] = true;

    let validJump = 0;

    for(let i = 1; i < len; i++){
        if(i >= minJump && dp[i - minJump]){
            validJump++;
        }
        if (i >= maxJump + 1 && dp[i - maxJump - 1]) {
            validJump--;
        }
        if(s[i] === '0' && validJump > 0){
            dp[i] = true;
        }
    }

    return dp.at(-1);
};