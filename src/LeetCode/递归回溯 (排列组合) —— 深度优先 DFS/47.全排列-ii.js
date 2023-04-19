/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// 给定一个可包含重复数字的序列 nums ，按任意顺序返回所有不重复的全排列。

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// ? 输入有重复 + 单个元素不可重复 + 输出可无顺序重复

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const uses = {}
  const res = []
  const recursion = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (uses[i] || (i > 0 && nums[i] === nums[i - 1] && !uses[i - 1])) {
        continue
      }
      uses[i] = true
      recursion([...path, nums[i]])
      uses[i] = false
    }
  }
  recursion([])
  return res
}
console.log(permuteUnique([1, 1, 2]))

// @lc code=end
