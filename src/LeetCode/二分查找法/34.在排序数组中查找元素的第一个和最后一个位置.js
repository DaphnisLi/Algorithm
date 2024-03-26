/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [getLeftIndex(nums, target), getRightIndex(nums, target)]
}

const getLeftIndex = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // mid === 0 边界处理
    if (nums[mid] === target && (mid === 0 || nums[mid - 1] < target)) {
      return mid
    }
    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

const getRightIndex = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // mid === nums.length - 1 边界处理
    if (nums[mid] === target && (mid === nums.length - 1 || nums[mid + 1] > target)) {
      return mid
    }
    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))

// @lc code=end
