/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// ? 交易次数无限 (买无数次, 卖无数次, 但同一时间只能持有一个股票) k = 正无穷

// 返回 你能获得的 最大 利润 。

// 示例 1：

// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
//      总利润为 4 + 3 = 7 。

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 无论一天操作几次, 其实有效操作只有一次, 因为最多持有一次股票, 不能多买多卖, 所以几乎约等于 k = 1
// 时间复杂度 n, 空间复杂度 1

var maxProfit = function (prices) {
  const dp = [0, -prices[0]]
  for (let i = 0; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i])
    dp[1] = Math.max(dp[1], dp[0] - prices[i]) // dp[0] - prices[i] 每天交易多次, 所以 dp[0] 不能忽略
  }
  return dp[0]
}

// @lc code=end
