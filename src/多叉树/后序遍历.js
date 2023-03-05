const root = require('./root')

// 递归
const traverse1 = (root) => {
  const res = []
  const recursion = (root) => {
    if (!root) return
    recursion(root.left)
    recursion(root.right)
    res.push(root.val)
  }
  recursion(root)
  return res
}

// 深度优先搜索, 栈: 先进后出
const traverse2 = (root) => {
  const res = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    stack.push(node)
    stack.push(null)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return res
}

console.log(traverse1(root))
console.log(traverse2(root))
