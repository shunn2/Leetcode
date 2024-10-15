/**
 * @param {string} s
 * @return {number}
 */
const minimumSteps = (s) => {
    let prev = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            count += (i - prev);
            prev++;
        }
    }

    return count;
}