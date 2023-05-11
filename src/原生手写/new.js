// 返回一个新对象
// 修改原型指向
// 修改 this 指向
// 执行构造函数的时候要传入参数
// 如果构造函数有返回值并且是一个对象, 那就要丢弃构造函数中 this 的属性, 只返回返回值的对象

const myNew = function (fn, ...params) {
  const obj = {}
  obj.__proto__ = fn.prototype
  const fnReturn = fn.apply(obj, params)
  return typeof fnReturn === 'object' ? fnReturn : obj
}

// 测试用例1
const test1 = function (name, age) {
  this.name = name
  this.age = age
  this.habit = 'Games'
}
test1.prototype.strength = 60
test1.prototype.sayYourName = function () {
  console.log('I am ' + this.name)
}
const person1 = myNew(test1, 'Kevin', '18')
console.log(person1.name) // Kevin
console.log(person1.habit) // Games
console.log(person1.strength) // 60
person1.sayYourName() // I am Kevin

// 测试用例1
const test2 = function (name, age) {
  this.strength = 60
  this.age = age
  return {
    name,
    habit: 'Games',
  }
}
const person2 = new test2('Kevin', '18')
console.log(person2.name) // Kevin
console.log(person2.habit) // Games
console.log(person2.strength) // undefined
console.log(person2.age) // undefined

// 测试用例3
const test3 = function (name, age) {
  this.strength = 60
  this.age = age
  return 'handsome boy'
}
const person3 = new test3('Kevin', '18')
console.log(person3.name) // undefined
console.log(person3.habit) // undefined
console.log(person3.strength) // 60
console.log(person3.age) // 18
