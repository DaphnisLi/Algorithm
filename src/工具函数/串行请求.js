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
