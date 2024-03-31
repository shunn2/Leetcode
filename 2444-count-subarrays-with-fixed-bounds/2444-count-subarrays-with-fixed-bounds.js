/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (a, L, R) => {
    let n = a.length; 
    let l = -1; 
    let rmin = -1; 
    let rmax = -1; 
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] < L || a[i] > R) l = i;
        if (a[i] == L) rmin = i;
        if (a[i] == R) rmax = i;
        let cnt = Math.min(rmin, rmax) - l;
        res += Math.max(0, cnt);
    }
    return res;
};