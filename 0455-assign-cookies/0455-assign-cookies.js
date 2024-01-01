/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    let p = 0
    let count = 0
    for (let i = 0; i < g.length;) {
        if (s[p] >= g[i]) {
            i++
            count++
            p++
        } else {
            p++
            if (p >= s.length) 
                break
        }
    }
    return count
};