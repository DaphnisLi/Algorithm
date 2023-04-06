const spliceMaxNum = (arr) => {
  const copyArr = arr.map(item => `${item}`)
  const getMaxNum = (arr, index) => {
    if (arr.length === 1) return arr[0]
    let maxNum = []
    let max = ''
    arr.forEach(item => {
      if (item[index] > max) {
        max = item[index]
        maxNum = []
        maxNum.push(item)
      } else if (item[index] === max) {
        maxNum.push(item)
      }
    })
    return getMaxNum(maxNum, index + 1)
  }
  let res = ''
  while (copyArr.length) {
    const maxNum = getMaxNum(copyArr, 0)
    const index = copyArr.indexOf(maxNum)
    copyArr.splice(index, 1)
    res += maxNum
  }
  return res
}

console.log(spliceMaxNum([7864, 284, 347, 7732, 8498])) // 849878647732347284
