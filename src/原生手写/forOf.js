const forOf = function (obj, cb) {
  // obj 必须可迭代
  if (typeof obj[Symbol.iterator] !== 'function') {
    throw new TypeError('iterator is not iterable')
  }
  // cb 必须是可执行函数
  if (typeof cb !== 'function') {
    throw new TypeError('cb must be callable')
  }

  const iterable = obj[Symbol.iterator]()
  let result = iterable.next()
  while (!result.done) {
    cb(result.value)
    result = iterable.next()
  }
}
const arr = [1, 2]
forOf(arr, value => console.log(value))
