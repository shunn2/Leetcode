/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let count = 0;
    const visited = new Array(n + 1).fill(false);

    function backtrack(index) {
        if (index > n) {
            count++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!visited[i] && (i % index === 0 || index % i === 0)) {
                visited[i] = true;
                backtrack(index + 1);
                visited[i] = false;
            }
        }
    }

    backtrack(1);
    return count;
};