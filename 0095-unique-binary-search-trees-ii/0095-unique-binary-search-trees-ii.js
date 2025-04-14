/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    function buildTrees(start, end) {
        const result = [];
        if (start > end) {
            result.push(null);
            return result;
        }
        for (let i = start; i <= end; i++) {
            const leftTrees = buildTrees(start, i - 1);
            const rightTrees = buildTrees(i + 1, end);

            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    result.push(root);
                }
            }
        }

        return result;
    }

    return buildTrees(1, n);
};