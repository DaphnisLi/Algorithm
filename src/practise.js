
const getTreePath = (tree, code) => {
  const path = []
  // 深度优先搜索
  // 找到了就会 return true
  const dfs = (tree) => {
    for (const item of tree) {
      if (item.children) {
        if (dfs(item.children)) {
          path.unshift(item.code)
          return true
        }
      } else if (item.code === code) {
        path.unshift(item.code)
        return true
      }
    }
  }
  dfs(tree)
  return path
}

getTreePath([], '')
