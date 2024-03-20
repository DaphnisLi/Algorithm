// a = 1, b= '1', a= {a:1,b:2}, b={b:2,a:1},  a= [1,2,3], b=[1,3,2] 函数全部相等
const myTypeOf = (target) => {
  if (Array.isArray(target)) {
    return 'array'
  } else {
    return typeof target
  }
}

const isEqual = (a, b) => {
  const aType = myTypeOf(a)
  const bType = myTypeOf(b)
  if (aType === bType) {
    if (aType === 'object') {
      if (Object.keys(a).length !== Object.keys(b).length) return false
      for (const key in a) {
        // 对象不在乎顺序
        if (!isEqual(a[key], b[key])) return false
      }
      return true
    } else if (aType === 'array') {
      if (a.length !== b.length) return false
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i])) return false
      }
      return true
    }
    return a === b
  }
  return false
}

console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }))
