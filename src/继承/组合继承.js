// 优点: 继承父类的构造函数和原型上的属性和方法, 但是并不会给实例带来原型中的引用被很多实例共享的缺点

// 缺点: 父类构造函数调用了两次, 造成了内存消耗
// 实际上有两组name和colors, 一组在SubType的实例（new出来的对象）上, 一组在它的原型上

// 为什么不会引用共享？
// 因为实例中有属性，不需要再去原型链中寻找

function SuperType (name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType (name, age) {
  // 继承属性
  SuperType.call(this, name) // 重点, 实际上是给 SubType 的实例 (new 出来的对象) 添加 name 和 colors 属性
  this.age = age
}
// 继承方法
SubType.prototype = new SuperType() // 第 1 次调用
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  console.log(this.age)
}

const instance1 = new SubType('Nicholas', 29) // 第 2 次调用
instance1.colors.push('black')
console.log(instance1.colors) // ['red', 'blue', 'green', 'black']
instance1.sayName() // Nicholas
instance1.sayAge() // 29
const instance2 = new SubType('Greg', 27)
console.log(instance2.colors) // ['red', 'blue', 'green']
instance2.sayName() // Greg
instance2.sayAge() // 27
console.log(SubType.prototype)
