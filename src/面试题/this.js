var name = 2 // 如果是 const、let 则不会绑定在 window

const Person = function () {
  this.name = 1
  this.sayName = function () {
    console.log(this)
    console.log(this.name)
  }
  // setTimeout 回调函数执行时, this 为 window
  // https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout#%E5%85%B3%E4%BA%8E%E2%80%9Cthis%E2%80%9D%E7%9A%84%E9%97%AE%E9%A2%98
  setTimeout(this.sayName, 0)
}

// ! 第二个输出是 setTimeout

// 1
// var person = new Person();
// (person.sayName = person.sayName)()
// window 2 window 2 因为 setTimeout 中的变量不会保存作用域链

// 2
// var person = new Person()
// person.sayName()
// () 左边是一个 Reference, person 1 window 2

// 3
// let person = new Person()
// let sayNameCopy = person.sayName
// sayNameCopy()
// () 左边是一个 Reference, 但其不是对象, 所以 this 为 window, window 2 window 2

// 4
// function Person() {
//   this.name = 1

//   this.sayName = () => {
//     console.log(this)
//     console.log(this.name)
//   }
// }
// let person = new Person()
// person.sayName.call({ name: "Nicolas" })
// 箭头函数不能改 this, Person 1

// 5
// function Person() {
//   this.name = 1

//   this.sayName = () => {
//     console.log(this)
//     console.log(this.name)
//   }
// }
// console.log(Person.sayName)
// ! TypeError: Person.sayName is not a function
// 因为函数的 this 是 window

// 6
// function Person() {
//   this.name = 1

//   this.sayName = function () {
//     console.log(this)
//     console.log(this.name)
//   }
// }
// console.log(Person.sayName())
// ! TypeError: Person.sayName is not a function
// 因为函数的 this 是 window


// 7
// function foo(something) {
//   this.a = something
// }

// const obj1 = {
//   foo
// }

// const obj2 = {}

// obj1.foo(2)
// console.log(obj1.a);
// obj1.foo.call(obj2, 3)
// console.log(obj2.a);

// const bar = new obj1.foo(4)

// console.log(obj1.a);
// console.log(bar.a);
// 2324


// 8
// function foo() {
//   return a => {
//     console.log(this.a)
//   }
// }
// const obj1 = {
//   a: 2
// }
// const obj2 = {
//   a: 3
// }
// const bar = foo.call(obj1)
// bar.call(obj2)
// 2
