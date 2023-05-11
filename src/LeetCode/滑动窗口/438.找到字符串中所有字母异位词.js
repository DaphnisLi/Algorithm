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
  let slow = 0
  let fast = 0
  const needs = {}
  for (const value of p) {
    needs[value] = (needs[value] || 0) + 1
  }
  const needsLen = Object.keys(needs).length
  const window = {}
  let valid = 0
  const res = []
  while (fast < s.length) {
    const cur = s[fast]
    fast++
    if (needs[cur]) {
      window[cur] = (window[cur] || 0) + 1
      if (needs[cur] === window[cur]) {
        valid++
      }
    }
    while (valid === needsLen) {
      if (fast - slow === p.length) {
        res.push(slow)
      }
      const cur = s[slow]
      slow++
      if (needs[cur]) {
        if (needs[cur] === window[cur]) {
          valid--
        }
        window[cur]--
      }
    }
  }
  return res
}

// @lc code=end
