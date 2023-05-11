1、每天都有三种「选择」：买入、卖出、无操作


2、状态：天数、最大交易次数、持有状态


3、k 为 1 时, 不需要 dp[0] - prices[i]
- k === 1: dp[1] = Math.max(dp[1], -prices[i])
- k > 1: dp[1] = Math.max(dp[1], dp[0] - prices[i])


4、买的时候 k - 1
dp[i][k][0] // 不持有
dp[i][k][1] // 持有
