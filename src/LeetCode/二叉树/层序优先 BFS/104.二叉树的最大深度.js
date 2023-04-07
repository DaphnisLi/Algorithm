/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  if (!root) return 0
  let max = 0
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len--) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    max++
  }
  return max
}

// @lc code=end
const root = {
  val: 'A',
  left: {
    val: 'B',
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
}
console.log(maxDepth(root))
