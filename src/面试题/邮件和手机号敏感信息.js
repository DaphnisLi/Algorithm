/*
问题描述：个人信息脱敏
给你一条个人信息字符串 s ，可能表示一个 邮箱地址 ，也可能表示一串 电话号码 。返回按如下规则 隐藏 个人信息后的结果：
1. 电子邮件地址：aa@bb.com  -> a*****a@bb.com
要想隐藏电子邮件地址中的个人信息：
名字 中间的字母（即，除第一个和最后一个字母外）必须用 5 个 "*****" 替换。
2. 电话号码：+86-1(234)567-890 -> +**-***-***-7890
电话号码可以由 10-13 位数字组成
后 10 位构成 本地号码
前面剩下的 0-3 位，构成 国家代码
**利用 {'+', '-', '(', ')', ' '} 这些 分隔字符 按某种形式对上述数字进行分隔
要想隐藏电话号码中的个人信息：
移除所有 分隔字符
隐藏个人信息后的电话号码应该遵从这种格式：
"***-***-XXXX" 如果国家代码为 0 位数字
"+*-***-***-XXXX" 如果国家代码为 1 位数字
"+**-***-***-XXXX" 如果国家代码为 2 位数字
"+***-***-***-XXXX" 如果国家代码为 3 位数字
"XXXX" 是最后 4 位 本地号码
*/

const email = (s) => {
  const splitS = s.split('@')
  const username = splitS[0]
  return `${username[0]}*****${username[username.length - 1]}@${splitS[1]}`
}

const phone = (s) => {
  const splitS = s.split('-')
  const countryCode = splitS[0]
  const countryCodeLen = countryCode.length
  const splitS2 = splitS.slice(-2)[0]
  return `${countryCodeLen > 1 ? '+'.padEnd(countryCodeLen, '*') + '-' : ''}***-***-${splitS2[splitS2.length - 1]}${splitS.slice(-1)}`
}

const main = (s = '') => {
  return s.includes('@') ? email(s) : phone(s)
}

console.log(main('+86-1(234)567-890'))
