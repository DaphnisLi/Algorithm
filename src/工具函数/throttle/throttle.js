// 时间戳: fn 会立即执行
export const throttle1 = function (fn, waitTime) {
  let previous = 0

  return function (event) {
    const now = +new Date()
    if (now - previous > waitTime) {
      fn.call(this, event)
      previous = now
    }
  }
}

// setTimeout: n 秒后才会执行
export const throttle2 = function (fn, waitTime) {
  let timeout
  return function (event) {
    const context = this
    if (!timeout) {
      timeout = setTimeout(function () {
        fn.call(context, event)
        timeout = undefined
      }, waitTime)
    }
  }
}
