const root = require('./root')

// => [1,4,3]
//      1      => 1
//    2   4    => 4
//  7   3      => 3

const rightView = (root) => {
  const queue = [root]
  const res = []
  while (queue.length) {
    let len = queue.length
    while (len--) {
      const node = queue.shift()
      if (!len) {
        res.push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return res
}

console.log(rightView(root)) // A C F
