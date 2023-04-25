/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0
  let right = 0
  let maxLen = 0
  const uses = {}
  // 扩张
  while (right < s.length) {
    const cur = s[right]
    right++
    uses[cur] = (uses[cur] || 0) + 1
    // 不一定是和 left 重复, 任何一个元素都有可能
    while (uses[cur] > 1) {
      const cur = s[left]
      left++
      uses[cur]--
    }
    maxLen = Math.max(right - left, maxLen)
  }
  return maxLen
}

// @lc code=end
