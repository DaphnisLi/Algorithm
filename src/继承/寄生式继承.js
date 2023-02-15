// 缺点: 只能在对象中定义方法, 导致方法无法复用

const b = {
  name: 'daphnis',
  age: '22',
}

const c = b
c.cc = function () {
  return 'hello'
}

console.log(b.cc()) // hello
console.log(c.cc()) // hello
