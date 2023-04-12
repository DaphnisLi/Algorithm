/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

// 示例 1:

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 解释:
// 1 + 2 + 4 = 7
// 没有其他符合的组合了。

// ? 输入无重复 + 单个元素不可重复 + 输出不可无顺序重复

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const sum = (arr) => arr.reduce((pre, cur) => pre + cur)
  const recursion = (path, index) => {
    if (path.length === k && sum(path) === n) {
      res.push(path)
      return
    }
    for (let i = index; i <= 9; i++) {
      if (path.length > k || (path.length && sum(path) > n)) {
        continue
      }
      recursion([...path, i], i + 1)
    }
  }
  recursion([], 1)
  return res
}
// @lc code=end
