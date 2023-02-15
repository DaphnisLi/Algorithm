// 优点
// 拥有组合继承的所有优点, 但是摒弃了它的缺点
// 不会调用两次父类构造函数
// 不会有两组 name 和 colors

function SuperType () {
  this.name = 'daphnis'
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}
function SubType () {
  SuperType.call(this, 'daphnis')
  this.age = 22
}
SubType.prototype = SuperType.prototype
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  console.log(this.age)
}
const a = new SubType()
const b = new SubType()
a.name = 'qqw'
console.log(a.name) // qqw
console.log(b.name) // daphnis
