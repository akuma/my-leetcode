/**
 * Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (!root) {
    return root
  }

  const left = root.right ? invertTree(root.right) : root.right
  const right = root.left ? invertTree(root.left) : root.left

  root.left = left
  root.right = right
  return root
}
