/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
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
        return [arr[left], arr[right]]
      }
    }
    return []
  }
  return nums.reduce((pre, cur, index) => {
    const two = twoSum(nums.slice(index + 1), -cur)
    return two.length ? [...pre, [cur, ...two]] : pre
  }, [])
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// @lc code=end
