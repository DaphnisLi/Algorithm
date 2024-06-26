/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// ? 只能交易一次（买一次, 卖一次） k = 1
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 时间复杂度 n, 空间复杂度 1
var maxProfit = function (prices) {
  // 初始状态
  const dp = [0, -prices[0]]
  for (let i = 0; i < prices.length; i++) {
    // 今天没有 = 昨天就没有 + 没操作, 昨天有 + 今天卖了
    dp[0] = Math.max(dp[0], dp[1] + prices[i])
    // 今天有 = 昨天有 + 没操作, 昨天没有 + 今天买了
    dp[1] = Math.max(dp[1], -prices[i])
  }
  return dp[0] // 做后一天没有收益最大, 毕竟不能砸手里
}
// @lc code=end
