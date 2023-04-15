/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

// ? 第一家和最后一家会有三种可能, 1偷最后不偷, 1不偷最后偷, 都不偷。只有第 1、2 种情况才是最大收益
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length

  if (len === 1) return nums[0]

  var recursion = function (start, end) {
    const dp = []
    for (let i = end; i >= start; i--) {
      dp[i] = Math.max(dp[i + 1] || 0, (dp[i + 2] || 0) + nums[i])
    }
    return dp[start]
  }
  return Math.max(recursion(0, len - 2), recursion(1, len - 1))
}

// @lc code=end
