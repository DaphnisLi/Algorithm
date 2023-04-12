/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

// 示例 1：

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// ? 输入无重复 + 单个元素不可重复 + 输出不可无顺序重复

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const recursion = (path, index) => {
    if (path.length === k) {
      res.push(path)
      return
    }
    for (let i = index; i <= n; i++) {
      if (path.length > k) {
        continue
      }
      recursion([...path, i], i + 1)
    }
  }
  recursion([], 1)
  return res
}

// @lc code=end
