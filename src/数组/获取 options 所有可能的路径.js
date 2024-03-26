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

const main = (tree) => {
  const res = []
  const recursion = (tree, path) => {
    for (const value of tree) {
      if (value.children) {
        recursion(value.children, [...path, value.value])
      } else {
        res.push([...path, value.value])
      }
    }
  }

  recursion(tree, [])
  return res
}

console.log(main(tree))
