
// 填充、相加、进位、拼接、最后拼接

const add = (num1, num2) => {
  const maxLen = Math.max(num1.length, num2.length)
  const str1 = num1.padStart(maxLen, 0)
  const str2 = num2.padStart(maxLen, 0)
  let flag = 0
  let sum = 0
  let res = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    sum = +str1[i] + +str2[i] + flag
    flag = Math.floor(sum / 10)
    res = sum % 10 + res
  }
  return flag === 1 ? res + '1' : res
}

console.log(add('9876543210123456789000000000123', '1234567898765432100000012345678901'))
