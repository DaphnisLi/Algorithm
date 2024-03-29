//

const spliceMaxNum = (arr) => {
  // 找到最大的数, 先从 arr 找, 找到当前 index 位置相同的或者最大的
  const getMaxNum = (arr, index) => {
    let max = arr[0]
    if (arr.length === 1) return max
    let maxNum = []

    arr.forEach(item => {
      if (item[index] > max[index]) {
        max = item
        maxNum = [item]
      } else if (item[index] === max[index]) {
        maxNum.push(item)
      }
    })
    return getMaxNum(maxNum, index + 1)
  }

  const copyArr = arr.map(item => `${item}`)
  let res = ''

  while (copyArr.length) {
    // 最大的数
    const maxNum = getMaxNum(copyArr, 0)
    // 删除
    const index = copyArr.indexOf(maxNum)
    copyArr.splice(index, 1)
    // 拼接
    res += maxNum
  }
  return res
}

console.log(spliceMaxNum([7864, 284, 347, 7732, 8498])) // 849878647732347284
