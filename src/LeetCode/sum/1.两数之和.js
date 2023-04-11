/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arr = [...nums].sort((a, b) => a - b)
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (target < sum) {
      right--
    } else if (target > sum) {
      left++
    } else {
      return [nums.indexOf(arr[left]), nums.lastIndexOf(arr[right])]
    }
  }
  return []
}
// @lc code=end
