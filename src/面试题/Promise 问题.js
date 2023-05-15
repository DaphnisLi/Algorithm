// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#%E8%BF%94%E5%9B%9E%E5%80%BC

const promise = new Promise((resolve, reject) => {
  throw new Error('报错')
  // resolve(123)
})

promise.then((res) => {
  console.log(1, res)
  return res
}, (err) => {
  console.log(2, err)
  // throw new Error('报错111')
  return err // 就算返回一个错误, 也当成返回一个值, 除非直接执行的时候报错, 如上行代码
}).then((res) => console.log(3, res), (err) => console.log(4, err))

// 2 Error: 报错
// 3 Error: 报错
