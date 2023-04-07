/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
// 外层纵向循环, 内层横向循环
var minDepth = function (root) {
  if (!root) return 0
  const queue = [root]
  let min = 1
  while (queue.length) {
    let len = queue.length
    while (len--) {
      const node = queue.shift()
      if (!node.left && !node.right) {
        return min
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    min++
  }
}

// @lc code=end
