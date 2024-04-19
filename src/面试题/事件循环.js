// setTimeout 按照时间循序执行
// async 是对 Promise 的封装

const async1 = async function () {
  console.log('async1 start')
  // 执行此处微任务后执行下面的代码
  const res = await async2()
  console.log(res)
  console.log('async1 end')
}

const async2 = async function () {
  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function () {
    console.log('promise2')
  })
  // ? 返回一个 Promise, 就会将 then 放在微任务队列的最后面
  // ? 返回一个普通代码, 就会正常放在微任务队列里
  return new Promise(function (resolve) {
    resolve('await')
  })
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
  new Promise(function (resolve) {
    console.log('setTimeout1')
    resolve()
  }).then(function () {
    console.log('setTimeout2')
  })
  console.log('setTimeout3')
}, 5000)

async1()

new Promise(function (resolve) {
  console.log('promise3')
  resolve()
}).then(function () {
  console.log('promise4')
  setTimeout(function () {
    console.log('setTimeout5')
  }, 1000)
})

console.log('script end')

// script start
// async1 start
// promise1
// promise3
// script end

// promise2
// promise4
// await
// async1 end

// setTimeout5
// setTimeout
// setTimeout1
// setTimeout3
// setTimeout2
