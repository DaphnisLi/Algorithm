// promise串行执行

/**
 * delay()函数功能：延迟函数，依次隔个3，4，5秒的时间在执行代码，并打印对应输出
 * @param {*} time 执行间隔时间
 */
function delay(time) {
  return new Promise((resolve, reject) => {
    console.log(`wait ${time}s`)
    setTimeout(() => {
      console.log('执行中', time)
      resolve()
    }, time * 1000);
  })
}

const arr = [10, 1]


async function test() {
  for (const v of arr) {
    await delay(v)
  }
}
test()
