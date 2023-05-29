// 深拷贝: 一个变量内部所有数据全量创建。注意，这里是完全的一份新内存。也可以换句话说：一个变量内部的所有对象都要被拷贝一份，就是深拷贝。
// 浅拷贝: 只要变量内部对象拷贝的不彻底，那就是浅拷贝。

// 比如一个数组里全是基本数据类型, 那扩展运算符就算深拷贝, 如果有一个引用数据类型, 那就只能算浅拷贝
// 所以说某些方法实现的拷贝, 深浅难说得很。比如 [...arr]、concat、slice 等

// 不能拷贝函数、Map、Set 等
const deepCopy1 = (obj) => JSON.parse(JSON.stringify(obj))

const deepCopy2 = (obj) => {
  // 基本数据类型
  const isBasicType = (obj) => obj === null || (typeof obj !== 'object' && typeof obj !== 'function')
  // 存储引用的 map, 防止循环引用
  const objMap = new WeakMap() // WeakMap 是弱引用, 使用完就被垃圾回收了
  // 引用都可以这么初始化
  // 优点: 不需要判断类型、还可以保留原型中的方法。直接就可以返回一个 {} [] 等。
  // Object、Array、Map、Set、Date、Error
  const initData = (obj) => new obj.constructor()
  const traverse = (obj) => {
    // 基本数据类型
    if (isBasicType(obj)) return obj

    if (Object.prototype.toString.call(obj) === '[object RegExp]') {
      return new RegExp(obj.source, obj.flags) // 模式、参数
    }
    // 克隆的数据, 初始化
    const cloneData = initData(obj)
    // 循环引用, 否则会爆栈
    if (objMap.has(obj)) {
      return objMap.get(obj)
    } else {
      objMap.set(obj, cloneData)
    }
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      // console.log(1)
      for (const key in obj) {
        cloneData[key] = traverse(obj[key])
      }
    }
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      obj.forEach((value, index) => {
        cloneData[index] = traverse(value) // 为什么不 push 因为 objMap 依赖 cloneData
      })
    }
    if (Object.prototype.toString.call(obj) === '[object Map]') {
      obj.forEach((value, key) => {
        cloneData.set(key, traverse(value))
      })
    }
    if (Object.prototype.toString.call(obj) === '[object Set]') {
      obj.forEach(value => {
        cloneData.add(traverse(value))
      })
    }
    return cloneData
  }

  const res = traverse(obj)
  return res
}

const map = new Map()
map.set('key', 'value')
map.set('a', '1')

const set = new Set()
set.add('a')
set.add('1')

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'Daphnis',
  },
  field4: [1, 2, 3],
  empty: null,
  map,
  set,
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  symbol: Object(Symbol(1)),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  func1: () => {
    console.log(1)
  },
  func2: function (a, b) {
    return a + b
  },
}

console.log(deepCopy2(target))
