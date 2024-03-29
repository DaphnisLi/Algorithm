// 将输入的数组组装成一颗树状的数据结构
const dataArr = [
  { id: '1a' },
  { id: '1b' },
  { id: '2a', parentId: '1a' },
  { id: '2b', parentId: '1a' },
  { id: '2c', parentId: '1b' },
  { id: '2d', parentId: '1b' },
  { id: '3a', parentId: '2a' },
  { id: '3b', parentId: '2a' },
]

const main = (arr) => {
  const recursion = (parentId) => {
    return arr.filter(item => (item.parentId || '') === parentId).map(item => {
      return {
        ...item,
        children: recursion(item.id),
      }
    })
  }
  return recursion('')
}

console.log(main(dataArr))
