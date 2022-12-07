// 扁平化
// flat 不改变原数组

export const myFlat1 = function (depth = 1) {
  if (!this.length) return []

  const traverse = (arr, depth) => {
    let cloneArr = []
    arr.forEach(item => {
      if (Array.isArray(item) && depth) {
        cloneArr = [...cloneArr, ...traverse(item, depth - 1)]
        // cloneArr = cloneArr.concat(traverse(item, depth - 1))
      } else {
        cloneArr.push(item)
      }
    })
    return cloneArr
  }
  const res = traverse(this, depth)
  return res
}

export const myFlat2 = function (depth = 1) {
  if (!this.length) return []

  const traverse = (arr, depth) => arr.reduce((pre, cur) => Array.isArray(cur) && depth ? [...pre, ...traverse(cur, depth - 1)] : [...pre, cur], [])
  const res = traverse(this, depth)
  return res
}

export const myFlat3 = function (depth = 1) {
  if (!this.length) return []

  let res = this
  while (depth--) {
    res = [].concat(...res)
  }
  return res
}

Array.prototype.myFlat = myFlat3

const arr = [1, 2, 3, [4, [5, [6]]], 7, [8], 9, [10, [11, [12]]]]
console.log(arr.myFlat(2))
