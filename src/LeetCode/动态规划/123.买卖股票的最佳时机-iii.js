/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// ? 最多买两次卖两次, 同一时间最多持有一个股票 ———— K = 2, 其实就需要计算买的次数就好, 因为最后都要卖出去, 买的时候 k - 1

// 示例 1:

// 输入：prices = [3,3,5,0,0,3,1,4]
// 输出：6
// 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
//      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const maxKey = 2
  const len = prices.length
  const dp = Array.from(new Array(len), () => Array.from(new Array(maxKey + 1), () => [0, 0]))
  for (let i = 0; i < len; i++) {
    for (let k = maxKey; k >= 1; k--) {
      if (i === 0) {
        dp[i][k][0] = 0
        dp[i][k][1] = -prices[0]
        continue
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }
  return dp[len - 1][maxKey][0]
}
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4], 2))

// @lc code=end
