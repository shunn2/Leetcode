/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(cur) {
        if (visited.has(cur)){
            return visited.get(cur);
        }

        const copy = new _Node(cur.val);
        visited.set(cur, copy);

        for (const nb of cur.neighbors) {
            copy.neighbors.push(dfs(nb));
        }
        return copy;
    }

    return dfs(node);
};