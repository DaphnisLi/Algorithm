// 缺点: 无法继承父类构造函数中的属性与方法, 但是可以继承父类构造函数的原型对象

function a () {
  this.nameA = 'a'
}

a.prototype.getNameA = function () {
  return 'this.nameA'
}
function b () {
  this.nameB = 'b'
}
b.prototype = a.prototype
b.prototype.constructor = b // 因为 b.prototype.constructor 被 a 重新赋值了, 所以要改回来
b.prototype.getNameB = function () {
  return 'this.nameB'
}
const i = new b()
console.log(i.getNameA()) // this.nameA
console.log(i.nameA) // undefined, 这段代码相当于创建了i.nameA, 但是没有赋值, 间接的说明访问不到 a 函数的 i.nameA
