// 给你一个字符串 s，请你返回 两个相同字符之间的最长子字符串的长度 ，计算长度时不含这两个字符。如果不存在这样的子字符串，返回 -1 。

// 示例 1：
// 输入：s = "aa"
// 输出：0
// 解释：最优的子字符串是两个 'a' 之间的空子字符串。

// 示例 2：
// 输入：s = "abca"
// 输出：2
// 解释：最优的子字符串是 "bc" 。

// 示例 3：
// 输入：s = "cbzxy"
// 输出：-1
// 解释：s 中不存在出现出现两次的字符，所以返回 -1 。

// 示例 4：
// 输入：s = "cabbac"
// 输出：4
// 解释：最优的子字符串是 "abba" ，其他的非最优解包括 "bb" 和 "" 。

const practise = (s = '') => {
  let maxLen = -1
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (s[i] === s[j]) {
        maxLen = Math.max(maxLen, j - i - 1)
      }
    }
  }
  return maxLen
}

// console.log(practise('cabcbac'))

// var name = 'Nicolas';
// function Person() {
//   this.name = 'Smiley';
//   this.sayName = function () {
//     console.log(this);
//     console.log(this.name);
//   };
//   // setTimeout(this.sayName, 0);
// }

// var person = new Person();
// (person.sayName = person.sayName)();
