/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var sumNumbers = function(root) {
    let result = 0;

    function isEnd(node) {
        return !node.left && !node.right;
    }

    function dfs(node, res) {
        if(!node) return;
        let temp = res * 10 + node.val;
        if(isEnd(node)){
            result += temp;
            return;
        }
        dfs(node.left, temp);
        dfs(node.right, temp);
    }
    dfs(root, 0);
    return result;
};
