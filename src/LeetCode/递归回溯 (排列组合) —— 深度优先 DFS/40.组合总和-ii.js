/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// ? 输入有重复 + 单个元素不可重复 + 输出不可无顺序重复

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const res = []
  const sum = (arr) => arr.reduce((pre, cur) => pre + cur)
  const uses = {}
  const recursion = (path, index) => {
    if (path.length && sum(path) === target) {
      res.push(path)
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (sum([...path, candidates[i]]) > target || uses[i] || (i - 1 >= index && candidates[i] === candidates[i - 1] && !uses[i - 1])) {
        continue
      }
      uses[i] = true
      recursion([...path, candidates[i]], i + 1)
      uses[i] = false
    }
  }
  recursion([], 0)
  return res
}
// @lc code=end
