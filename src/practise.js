// 利用 Promise 实现一个元素先红色三秒再绿色一秒黄色两秒

const printf = (fn, wait) => {
  return new Promise(resolve => {
    setTimeout(() => {
      fn()
      resolve()
    }, wait)
  })
}

const main = () => {
  Promise.resolve().then(() => {
    return printf(() => console.log('红'), 3000)
  }).then(() => {
    return printf(() => console.log('绿'), 1000)
  }).then(() => {
    return printf(() => console.log('黄'), 2000)
  }).then(() => {
    main()
  })
}
main()
