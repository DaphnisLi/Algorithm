// 将函数设为对象的属性
// 执行该函数
// 删除该函数
// 多个参数
// this（指的是传入的 obj） 可能是 null
// this 可以设置 fn

/**
 * @param {*} context 上下文 this
 */
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new Error(`Error: ${this}.call is not a function`)
  }
  const currentContext = context || window
  currentContext.fn = this
  const params = [...arguments].slice(1)
  const fnReturn = currentContext.fn(...params)
  delete currentContext.fn
  return fnReturn
}
