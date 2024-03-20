const main = (arr) => {
  let res = []
  const recursion = (arr) => {
    const copyArr = [...arr]
    const len = arr.length
    for (let i = 0; i < len; i++) {
      if (i === 0) {
        const tempArr = copyArr.shift()
        res = [...res, ...tempArr]
      } else if (i === len - 1) {
        const tempArr = copyArr.pop().reverse()
        res = [...res, ...tempArr]
        recursion(copyArr)
      } else {
        // 原来的位置
        const index = copyArr.findIndex(item => item.includes(arr[i][0]))
        res.push(copyArr[index].pop())
      }
    }
  }
  recursion(arr)
  return res
}

console.log(main([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// 123698745
