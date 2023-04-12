/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// 给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// ? 输入无重复 + 单个元素不可重复 + 输出可无顺序重复

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const uses = {}
  const res = []
  const recursion = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for (const value of nums) {
      if (uses[value]) {
        continue
      }
      uses[value] = true
      recursion([...path, value])
      uses[value] = false
    }
  }
  recursion([])
  return res
}
// @lc code=end
