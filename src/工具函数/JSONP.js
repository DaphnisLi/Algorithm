const jsonp = ({ url, params, callback }) => {
  return new Promise((resolve) => {
    const script = document.createElement('script') // 新建
    window[callback] = function (data) {
      resolve(data)
      document.body.removeChild(script) // 删除
    }
    params = { ...params, callback }
    const arr = []
    for (const key in params) {
      arr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arr.join('&')}` // url?name=Daphnis&age=24&callback=fn
    document.body.appendChild(script) // 插入到 body 末尾
  })
}
jsonp({
  url: 'url',
  params: { name: 'Daphnis', age: 24 },
  callback: 'fn',
}).then(data => {
  console.log(data)
})

// 响应数据 callback(data)
