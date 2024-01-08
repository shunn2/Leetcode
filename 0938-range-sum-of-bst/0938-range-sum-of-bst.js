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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  return dfs(root, L, R)
};

function dfs(root, L, R, res = 0){
  if(!root) return 0;
  if(root.val >= L && root.val <= R ){
    res = root.val;
  }
  return res + dfs(root.left, L, R) + dfs(root.right, L, R)
}
