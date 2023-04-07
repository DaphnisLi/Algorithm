/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
    stack.push(node)
    stack.push(null)
  }
  return res
}

// @lc code=end
