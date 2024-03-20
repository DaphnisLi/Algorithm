// 防抖: 如果事件在 n 秒内再次触发, 那就重新计时
// 主动取消
// 立即执行
export const debounce = (fun, waitTime) => {
  let timeout

  const debounced = () => {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(fun, waitTime)
  }

  // 取消
  debounced.onCancel = () => {
    clearTimeout(timeout)
  }

  // 立即执行
  debounced.onRun = () => {
    debounced.onCancel()
    fun()
  }

  return debounced
}

export const debounce1 = function (fn, waitTime) {
  let timeout
  return function () {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(fn, waitTime)
  }
}

// 缺点: 如果 getUserAction 里会使用 this, 那么在以前会打印 <div id="container"></div>, 但是用了debounce 后就会打印 window。
// 原因: 我猜测一个 dom 元素事件的回调函数执行时会用类似 call 这样的函数来改变函数内部 this 指向, 使之指向 dom 元素。但如果将 getUserAction 放在 setTimeout 里执行，就会导致 getUserAction 脱离事件的控制, 从而无法改变 this，又因为 MemberExpression 不是 Reference，所以 this 为 window。
// 解决: return 出来的函数会被事件控制
export const debounce2 = function (fn, waitTime) {
  let timeout
  return function () {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.call(context)
    }, waitTime)
  }
}

// 缺点: 事件回调函数会赋予一个 event 事件对象
// 解决: 那就给它吧
export const debounce3 = function (fn, waitTime) {
  let timeout
  return function (event) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.call(context, event)
    }, waitTime)
  }
}

// 新需求: 希望立刻执行回调函数, 等到 n 秒后才可以再次触发执。如果 n 秒内再次触发事件, 则不执行回调函数。
// immediate 是否立刻执行
// 解决: 每次执行 setTimeout 回调函数都要把 timeout 初始化
export const debounce4 = function (fn, waitTime, immediate) {
  let timeout // 从 2 开始递增
  return function (event) {
    const context = this

    timeout && clearTimeout(timeout)

    if (immediate) {
      timeout || fn.call(context, event)

      timeout = setTimeout(function () {
        timeout = undefined
      }, waitTime)
    } else {
      timeout = setTimeout(function () {
        fn.call(context, event)
      }, waitTime)
    }
  }
}

// 缺点: 如果 getUserAction 有返回值怎么办 ?
// immediate false 的情况下无法做到 return 返回值, 因为 setTimeout 是异步, return 时根本没有返回值, 是 undefined。只有在 immediate 为 true 的时候做了。

export const debounce5 = function (fn, waitTime, immediate) {
  let timeout
  return function (event) {
    const context = this
    timeout && clearTimeout(timeout)
    let result // 感觉放在这里比较好, 如果放在外层, 那么就算本次 fn 没有执行, 也会 return 上一次的结果, 放在这里, 如果本次 fn 没有执行, 就 return undefined

    if (immediate) {
      if (!timeout) {
        result = fn.call(context, event)
      }

      timeout = setTimeout(function () {
        timeout = undefined
      }, waitTime)

      return result
    } else {
      timeout = setTimeout(function () {
        fn.call(context, event)
      }, waitTime)
    }
  }
}

// 新需求: 如果等待时间很久, 不想再等了, 想把防抖的限制取消, 然后再次触发事件又可以继续执行下一个
export const debounce6 = function (fn, waitTime, immediate) {
  let timeout
  const debounced = function (event) {
    const context = this
    timeout && clearTimeout(timeout)
    let result // 感觉放在这里比较好, 如果放在外层, 那么就算本次 fn 没有执行, 也会 return 上一次的结果, 放在这里, 如果本次 fn 没有执行, 就 return undefined

    if (immediate) {
      if (!timeout) {
        result = fn.call(context, event)
      }

      timeout = setTimeout(function () {
        timeout = undefined
      }, waitTime)

      return result
    } else {
      timeout = setTimeout(function () {
        fn.call(context, event)
      }, waitTime)
    }
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = undefined
  }

  return debounced
}
