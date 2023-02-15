// 优点: 可以继承父类的原型和构造函数中的属性和方法

function SuperType () {
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.getColors = function () {
  return this.colors
}

function SubType () {
}
// 继承了 SuperType
SubType.prototype = new SuperType() // 相当于重新赋值
SubType.prototype.constructor = SubType // 指回去
const instance1 = new SubType()
instance1.colors.push('black') // 原型中的引用被所有实例共享
// 被所有实例共享
console.log(instance1.colors) // ['red', 'blue', 'green', 'black']
const instance2 = new SubType()
console.log(instance2.colors) // ['red', 'blue', 'green', 'black']
console.log(instance2.getColors()) // ['red', 'blue', 'green', 'black']
