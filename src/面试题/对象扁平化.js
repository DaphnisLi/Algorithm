const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
}

const flatten = (res, obj, keyName) => {
  if (obj instanceof Array) {
    obj.forEach((item, index) => {
      flatten(res, item, `${keyName}[${index}]`)
    })
  } else if (obj instanceof Object) {
    for (const key in obj) {
      if (obj[key] instanceof Object) {
        flatten(res, obj[key], `${keyName}.${key}`)
      } else if (obj[key] instanceof Array) {
        flatten(res, obj[key], `${keyName}.${key}`)
      } else {
        res[`${keyName}.${key}`] = obj[key]
      }
    }
  } else {
    res[keyName] = obj
  }
}

const main = (obj) => {
  const res = {}
  for (const key in obj) {
    if (obj[key] instanceof Array) {
      flatten(res, obj[key], `${key}`)
    } else if (obj[key] instanceof Object) {
      flatten(res, obj[key], `${key}`)
    } else {
      res[key] = obj[key]
    }
  }
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
