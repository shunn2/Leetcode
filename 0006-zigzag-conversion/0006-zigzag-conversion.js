/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    const rows = [];
    let loc = 0;
    let down = false;
    for(let i = 0; i < s.length; i++){
        rows[loc] = (rows[loc]||"") + s[i];
        if(loc === 0 || loc === (numRows - 1)){
            down = !down
        }
        if(down) loc++;
        else loc--;
    }
    return rows.join("");
};