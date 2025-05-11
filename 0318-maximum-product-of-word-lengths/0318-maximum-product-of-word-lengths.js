/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const n = words.length;
    const sets = words.map(word => new Set(word));
    let max = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const set1 = sets[i];
            const set2 = sets[j];
            let hasCommon = false;

            for (const char of set1) {
                if (set2.has(char)) {
                    hasCommon = true;
                    break;
                }
            }

            if (!hasCommon) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

    return max;
};