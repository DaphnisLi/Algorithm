// 返回一个函数、并且可以像 call 一样传入参数
// 函数有返回值
// 执行 bind 时传的参数要和执行返回的函数时传的参数合并
// 返回的函数被 new 会丢失 bind 绑定的 this, 要绑定 new 出来的实例的 this
// fn.prototype 注意不要丢失, 但也别直接赋值

// 测试用例 https://github.com/mqyqingfeng/Blog/issues/12#:~:text=%E4%B9%9F%E5%B0%B1%E6%98%AF%E8%AF%B4%E5%BD%93%20bind%20%E8%BF%94%E5%9B%9E%E7%9A%84%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8Cbind%20%E6%97%B6%E6%8C%87%E5%AE%9A%E7%9A%84%20this%20%E5%80%BC%E4%BC%9A%E5%A4%B1%E6%95%88%EF%BC%8C%E4%BD%86%E4%BC%A0%E5%85%A5%E7%9A%84%E5%8F%82%E6%95%B0%E4%BE%9D%E7%84%B6%E7%94%9F%E6%95%88%E3%80%82%E4%B8%BE%E4%B8%AA%E4%BE%8B%E5%AD%90%EF%BC%9A

/**
 *
 * @param {*} context 上下文 this
 * @returns
 */
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error(`Error: ${this}.bind is not a function`)
  }
  const fn = this // 保存一下, 否则在 fnBind 中获取不到
  const bindFnParams = [...arguments].slice(1)
  const fnBind = function () {
    const fnParams = bindFnParams.concat([...arguments]) // 合并参数
    return fn.apply(this instanceof fnBind ? this : context, fnParams) // 判断一下 this, new 之后, this 指向实例。this instanceof fnBind 判断有没有被 new
  }
  // fnBind.prototype = fn.prototype 错误写法, 因为修改 fnBind.prototype 会将 fn.prototype 一起修改
  const fnTemp = function () { }
  fnTemp.prototype = fn.prototype
  fnBind.prototype = new fnTemp()
  return fnBind
}
