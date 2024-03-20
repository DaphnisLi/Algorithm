// 节流: n 秒内只能触发一次事件
// setTimeout: n 秒后才会执行
export const throttle1 = function (fn, waitTime) {
  let timeout
  return function (event) {
    const context = this // 保存 this, 防止丢失
    if (!timeout) {
      timeout = setTimeout(function () {
        fn.call(context, event)
        timeout = undefined
      }, waitTime)
    }
  }
}
// 时间戳: fn 会立即执行
// 缺点: 如果就输入一次, 后面不输入了, 岂不是一直都没办法执行了
export const throttle2 = function (fn, waitTime) {
  let previous = 0

  return function (event) {
    const now = +new Date()
    if (now - previous > waitTime) {
      fn.call(this, event)
      previous = now
    }
  }
}
