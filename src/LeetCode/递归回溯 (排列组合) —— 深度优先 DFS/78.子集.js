/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// ? 输入无重复 + 单个元素不可重复 + 输出不可无顺序重复

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const recursion = (path, index) => {
    res.push(path)
    for (let i = index; i < nums.length; i++) {
      recursion([...path, nums[i]], i + 1)
    }
  }
  recursion([], 0)
  return res
}
// @lc code=end
