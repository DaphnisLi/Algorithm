// https://juejin.cn/post/6945319439772434469#heading-20
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
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        const res = fulfillFun(this.value)
        this.resolvePromise(res, resolve, reject)
      }
      if (this.status === REJECTED) {
        rejectFun(this.error)
      }
      // 兼容异步情况, 例 2
      // 调用多个 then, 例 3
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
