/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。

// 示例 1：

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const need = {}
  for (const value of s1) {
    need[value] = (need[value] || 0) + 1
  }
  const needLen = Object.keys(need).length
  const window = {}
  let valid = 0
  let left = 0
  let right = 0

  // 扩张
  while (right < s2.length) {
    const cur = s2[right]
    right++
    if (need[cur]) {
      window[cur] = (window[cur] || 0) + 1
      if (window[cur] === need[cur]) {
        valid++
      }
    }
    if (valid === needLen && right - left === s1.length) {
      return true
    }
    if (right - left + 1 > s1.length) {
      const cur = s2[left]
      left++
      if (need[cur]) {
        if (window[cur] === need[cur]) {
          valid--
        }
        window[cur]--
      }
    }
  }
  return false
}

console.log(checkInclusion('ab', 'eidbaooo'))

// @lc code=end
