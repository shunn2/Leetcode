/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let balance = 0;
    let moves = 0;

    for (const ch of s) {
        if (ch === '(') {
            balance += 1;
        } else {
            if (balance > 0) {
                balance -= 1;
            } else {
                moves += 1;
            }
        }
    }

    return moves + balance;
};