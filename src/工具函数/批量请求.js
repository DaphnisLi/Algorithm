export async function batchRequestApi ({ api, num = 100, params }) {
  // 接口默认一次最多请求100条数据
  const chunkParams = params.reduce((pre, cur, index) => {
    if ((index + 1) % num === 0) {
      return [[...pre, cur]]
    }
    return [...pre, cur]
  }, [])
  const requests = chunkParams.map(param => api(param))
  const datas = await Promise.all(requests).then(data => data)

  return datas.reduce((result, data) => {
    const [res, err] = data
    if (err) {
      return result
    }
    const dataList = res.data
    return { ...result, ...dataList }
  }, {})
}
