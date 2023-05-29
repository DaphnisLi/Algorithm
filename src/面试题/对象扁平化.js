const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
}

const main = (obj) => {
  const res = {}
  const recursion = (obj, keyName) => {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        recursion(item, `${keyName}[${index}]`)
      })
    } else if (typeof obj === 'object') {
      for (const key in obj) {
        recursion(obj[key], `${keyName && `${keyName}.`}${key}`)
      }
    } else {
      res[keyName] = obj
    }
  }
  recursion(obj, '')
  return res
}

console.log(main(obj))

// {
//   'a.b': 1,
//   'a.c': 2,
//   'a.d.e': 5,
//   'b[0]': 1,
//   'b[1]': 3,
//   'b[2].a': 2,
//   'b[2].b': 3,
//   c: 3,
// }
