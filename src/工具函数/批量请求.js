// 实现一个并发请求函数concurrencyRequest(urls, maxNum)，要求如下:
// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出（发送请求的函数可以直接使用fetch即可）

// ? 一次输入
const concurrencyRequest = (urls = [], maxNum) => {
  return new Promise((resolve) => {
    if (!urls.length) {
      resolve([])
    }
    const results = []
    // 发起请求
    const request = async () => {
      const url = urls.shift()
      try {
        const res = await fetch(url)
        results.push(res)
      } catch (err) {
        results.push(err)
      }

      if (urls.length) {
        request()
      } else {
        resolve(results)
      }
    }
    // 最大并行数
    const parallelNum = Math.min(maxNum, urls.length)
    for (let i = 0; i < parallelNum; i++) {
      request()
    }
  })
}

const urls = []
for (let i = 1; i <= 10; i++) {
  urls.push(`url-${i}`)
}

const fetch = (url) => {
  return `请求完成 ${url}`
}

concurrencyRequest(urls, 3).then(res => {
  console.log(res)
})


// ? 逐个输入
function requestPool(maxNum) {
  const urls = []
  return (url) => {
    urls.push(url)
    return new Promise((resolve) => {
      if (!urls.length) {
        resolve([])
      }
      const results = []
      // 发起请求
      const request = async () => {
        const url = urls.shift()
        try {
          const res = await fetch(url)
          results.push(res)
        } catch (err) {
          results.push(err)
        }

        if (urls.length) {
          request()
        } else {
          resolve(results)
        }
      }

      const parallelNum = Math.min(maxNum, urls.length)
      for (let i = 0; i < parallelNum; i++) {
        request()
      }
    })
  }
}

const request = requestPool(3)

request('url1').then((res) => console.log(res)).catch()
request('url2').then((res) => console.log(res)).catch()
request('url3').then((res) => console.log(res)).catch()
request('url4').then((res) => console.log(res)).catch()
