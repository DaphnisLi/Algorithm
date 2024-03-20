const tree = [
  {
    value: 1,
    children: [
      {
        value: 11,
        children: [
          {
            value: 111,
          }
        ]
      }
    ]
  },
  {
    value: 2,
    children: [
      {
        value: 22,
        children: [
          {
            value: 222,
          }
        ]
      }
    ]
  }
]


const getTreePath = (arr, value) => {
  let res
  const dfs = (tree, path) => {
    if (!tree.length) return []
    for (const item of tree) {
      path.push(item.value)
      if (item.value === value) {
        res = [...path] // 断掉引用关系, 否则会被后面的 pop 影响
        return
      }
      dfs(item.children || [], path)
      path.pop() // 回溯, 没用的路径去掉
    }
  }
  dfs(arr, [])
  return res
}

console.log(getTreePath(tree, 222))
