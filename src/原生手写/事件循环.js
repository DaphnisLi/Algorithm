// async 是对 Promise
const async1 = async function () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
const async2 = async function () {
  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function () {
    console.log('promise2')
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
}, 0)
async1()

new Promise(function (resolve) {
  console.log('promise3')
  resolve()
}).then(function () {
  console.log('promise4')
  setTimeout(function () {
    console.log('setTimeout5')
  })
})

console.log('script end')

// script start
// async1 start
// promise1
// promise3
// script end
// promise2
// async1 end
// promise4
// setTimeout
