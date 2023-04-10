/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 暴力破解: 双层循环, 时间复杂度 n*2
// 滑动窗口: 时间复杂度 n, 内循环无法估计, 但能肯定远小于 n, 所以当作常数项忽略不计
var minWindow = function (s, t) {
  const need = {}
  for (const value of t) {
    need[value] = (need[value] || 0) + 1
  }
  const needLen = Object.keys(need).length
  const window = {}
  let minLen = Number.MAX_VALUE
  let left = 0
  let right = 0
  let valid = 0 // 所需字符总数
  let start = 0
  // 扩张
  while (right < s.length) {
    const cur = s[right]
    right++
    if (need[cur]) {
      window[cur] = (window[cur] || 0) + 1
      if (window[cur] === need[cur]) {
        valid++
      }
    }
    // 收缩
    while (valid === needLen) {
      if (right - left < minLen) {
        minLen = right - left
        start = left
      }
      const cur = s[left]
      left++
      if (need[cur]) {
        if (window[cur] === need[cur]) {
          valid--
        }
        window[cur]--
      }
    }
  }

  return minLen === Number.MAX_VALUE ? '' : s.slice(start, start + minLen)
}

// @lc code=end
