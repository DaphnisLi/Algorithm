import { isObject, isArray, isMap, isSet } from './判断类型'
// 深拷贝: 一个变量内部所有数据全量创建。注意，这里是完全的一份新内存。也可以换句话说：一个变量内部的所有对象都要被拷贝一份，就是深拷贝。
// 浅拷贝: 只要变量内部对象拷贝的不彻底，那就是浅拷贝。

// 比如一个数组里全是基本数据类型, 那扩展运算符就算深拷贝, 如果有一个引用数据类型, 那就只能算浅拷贝
// 所以说某些方法实现的拷贝, 深浅难说得很。比如 [...arr]、concat、slice 等

// 不能拷贝函数、Map、Set 等
const deepCopy1 = (obj) => JSON.parse(JSON.stringify(obj))

// Object、Array、Map、Set —— 递归
// Boolean、Number、String、Date、Error —— 直接 constructor
// 循环引用
// 函数不处理，原因：1、没意义，就算两个对象用了同一个引用的函数也不会有什么问题。2、拷贝一个没啥问题，箭头函数用 eval(() => { })，普通函数用 new Function(...函数参数数组, function () { }')，但关键是普通函数的参数和函数体不好获取，如果直接 fun.toString() 匹配字符串，那么函数情况太复杂了，比如下面的例子
// const func = function (param1 = { a: 1, b: 2 }, param2 = (param3 = { a: 1, b: 2 }) => { console.log(2) }) {
//   console.log(1)
// }

const deepCopy2 = (data) => {
  // typeof null === 'object'
  // 基本数据类型
  const isBasicType = (value) => value === null || typeof value !== 'function' || typeof value !== 'object'

  // 存储引用的 map, 防止循环引用
  const objMap = new WeakMap()

  // 引用都可以这么初始化
  const initData = (data) => new data.constructor()

  const traverse = (data) => {
    // 基本数据类型
    if (isBasicType(data)) return data

    // 克隆的数据, 初始化
    const cloneData = initData(data)

    // 循环引用
    if (objMap.has(data)) {
      return objMap.get(data) // 返回 cloneData
    } else {
      objMap.set(data, cloneData) // 后面的流程如果 cloneData 改变, 这里也会同步改变
    }

    if (isObject(data)) {
      for (const key in data) {
        cloneData[key] = traverse(data[key])
      }
    }

    if (isArray(data)) {
      data.forEach((value, index) => {
        cloneData[index] = traverse(value) // 为什么不 push 因为 objMap 依赖 cloneData
      })
    }

    if (isMap(data)) {
      data.forEach((value, key) => {
        cloneData.set(key, traverse(value))
      })
    }

    if (isSet(data)) {
      data.forEach(value => {
        cloneData.add(traverse(value))
      })
    }

    // Date 和 Error 在初始化的时候就拷贝了
    return cloneData
  }

  const res = traverse(data)
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

console.log(deepCopy1(target))
console.log(deepCopy2(target))
