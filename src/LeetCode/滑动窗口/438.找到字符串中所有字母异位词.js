/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = {}
  for (const value of p) {
    need[value] = (need[value] || 0) + 1
  }
  const needLen = Object.keys(need).length
  const window = {}
  let valid = 0
  let left = 0
  let right = 0
  const res = []

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
      if (right - left === p.length) {
        res.push(left)
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
  return res
}

// @lc code=end
