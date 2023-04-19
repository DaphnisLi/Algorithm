// 填充、相加、进位、拼接、最后拼接

const add = (num1, num2) => {
  const maxLen = Math.max(`${num1}`.length, `${num2}`.length)
  const s1 = `${num1}`.padStart(maxLen, 0)
  const s2 = `${num2}`.padStart(maxLen, 0)
  let res = ''
  let flag = 0
  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = +s1[i] + +s2[i] + flag
    flag = Math.floor(sum / 10)
    res = sum % 10 + res
  }
  return flag ? '1' + res : res
}

console.log(add('9876543210123456789000000000123', '1234567898765432100000012345678901')) // 1244444441975555556789012345679024
