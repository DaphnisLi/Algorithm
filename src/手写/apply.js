// 和 call 的区别: call 的参数是一个个传的, 但是 apply 的参数是全放在数组里, 然后再挨个传给 fn
/**
 *
 * @param {*} context 上下文 this
 * @param {*} fnParam 函数的参数
 * @returns
 */
Function.prototype.myApply = function (context, fnParam) {
  if (typeof this !== 'function') {
    throw new Error(`Error: ${this}.call is not a function`)
  }
  const currentContext = context || window
  currentContext.fn = this
  const fnReturn = currentContext.fn(...fnParam)
  delete currentContext.fn
  return fnReturn
}
