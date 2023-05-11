// 利用 Promise 实现一个元素先红色三秒再绿色一秒黄色两秒

const printf = (time, color) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(color)
      resolve()
    }, time)
  })
}

const main = () => {
  Promise.resolve().then(() => {
    return printf(3000, '红')
  }).then(() => {
    return printf(1000, '绿')
  }).then(() => {
    return printf(2000, '黄')
  }).then(() => {
    main()
  })
}

main()
