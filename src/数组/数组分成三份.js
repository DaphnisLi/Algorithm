// 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）
const main = (arr, n) => {
  const res = Array.from(new Array(n), () => ({ sum: 0, arr: [] }))
  arr.sort((a, b) => b - a) // ? 一定要从大到小, 因为大数到后面不好控制
  arr.forEach(item => {
    const cur = res.sort((a, b) => a.sum - b.sum)[0]
    cur.sum += item
    cur.arr.push(item)
  })
  return res
}

console.log(main([11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90], 3))
