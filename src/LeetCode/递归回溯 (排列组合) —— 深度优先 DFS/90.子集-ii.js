/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

// ? 输入有重复 + 单个元素不可重复 + 输出不可无顺序重复

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  const recursion = (path, index) => {
    res.push(path)
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      recursion([...path, nums[i]], i + 1)
    }
  }
  recursion([], 0)
  return res
}

console.log(subsetsWithDup([1, 2, 2]))
// @lc code=end
