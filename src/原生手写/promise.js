// https://juejin.cn/post/6945319439772434469#heading-6
// 传进来的回调函数 fn 怎么执行
// Promise 里的函数不能改 this
// 状态初始化为 pending, 只能修改一次
// then 接受两个回调函数 (成功、失败), 需要判断状态执行
// fn 里有 setTimeout 怎么办, resolve、reject 在 setTimeout 里执行, 执行 then 时先保存 resolve、reject 回调, 等到执行 resolve、reject 时再调用。注意如果是连续调用 then, 那么需要循环执行
// then 链

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor (fn) {
    fn(this.resolve, this.reject)
  }

  status = PENDING

  value

  error

  // 成功回调函数
  onFulfilledCallbacks = []

  // 失败回调函数
  onRejectedCallbacks = []

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
    }
    this.value = value
    this.onFulfilledCallbacks?.forEach?.(item => {
      item?.(value)
    })
  }

  reject = (error) => {
    if (this.status === PENDING) {
      this.status = REJECTED
    }
    this.error = error
    this.onRejectedCallbacks?.forEach?.(item => {
      item?.(error)
    })
  }

  then = (fulfillFun, rejectFun) => {
    // 链式调用
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 注册微任务
        queueMicrotask(() => {
          const res = fulfillFun(this.value)
          this.resolvePromise(res, resolve, reject)
        })
      }
      if (this.status === REJECTED) {
        rejectFun(this.error)
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks?.push?.(fulfillFun)
        this.onRejectedCallbacks?.push?.(rejectFun)
      }
    })
    return promise
  }

  resolvePromise = (res, resolve, reject) => {
    if (res instanceof MyPromise) {
      res.then(resolve, reject)
    } else {
      // 执行下一个 then
      resolve(res)
    }
  }
}

const MyPromise1 = new MyPromise((resolve, reject) => {
  resolve('1')
  reject('err1')
})

MyPromise1.then(value => {
  console.log('resolve', value)
}, reason => {
  console.log('reject', reason)
})

const MyPromise2 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve('2')
  })
})

MyPromise2.then(value => {
  console.log('resolve', value)
}, reason => {
  console.log('reject', reason)
})

const MyPromise3 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve('success')
  })
})

MyPromise3.then(value => {
  console.log(1)
  console.log('resolve', value)
})

MyPromise3.then(value => {
  console.log(2)
  console.log('resolve', value)
})

MyPromise3.then(value => {
  console.log(3)
  console.log('resolve', value)
})

// 3
// resolve success

const MyPromise4 = new MyPromise((resolve) => {
  // 目前这里只处理同步的问题
  resolve('success')
})

const other = () => {
  return new MyPromise((resolve) => {
    resolve('other')
  })
}
MyPromise4.then(value => {
  console.log(1)
  console.log('resolve', value)
  return other()
}).then(value => {
  console.log(2)
  console.log('resolve', value)
})
