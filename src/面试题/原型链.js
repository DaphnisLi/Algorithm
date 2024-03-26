Function.prototype.a = 1
Object.prototype.b = 2
function F() {

}

const f = new F()

console.log(F.a, F.b, f.a, f.b)
// 1 2 undefined 2

// ! new 时不会继承 Function

// 当你通过new F()创建一个新对象f时，这个新对象f的原型链是这样的：f自身属性 -> F.prototype -> Object.prototype -> null。注意这里有个重要的细节：虽然所有函数都是Function的实例，但是通过构造函数创建的对象实例并不直接连接到构造函数的构造器（Function）的原型上，而是连接到该构造函数的prototype属性指向的对象上。
