// 求二维数组的全排列组合 结果：Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2
const arr = [['A', 'B'], ['a', 'b'], [1, 2]]

const main = (arr) => {
  return arr.reduce((pre, cur) => {
    const res = []
    pre.forEach(item => {
      cur.forEach(i => {
        res.push(item + i)
      })
    })
    return res
  })
}

console.log(main(arr))
