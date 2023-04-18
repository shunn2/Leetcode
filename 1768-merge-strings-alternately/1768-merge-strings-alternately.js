/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = [];
    let index1 = 0;
    let index2 = 0;
    for(let i = 0; i < Math.max(word1.length,word2.length); i++){
        if(index1 <= word1.length) {
            ans.push(word1[index1]);
            index1++;
        }
        if(index2 <= word2.length) {
            ans.push(word2[index2]);
            index2++;
        }
    }
    return ans.join('');
};