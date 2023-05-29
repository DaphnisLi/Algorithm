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
// () 左边是一个 Reference, 单其不是对象, 所以 this 为 window, window 2 window 2

// 4
// function Person() {
//   this.name = 1

//   this.sayName = () => {
//     console.log(this);
//     console.log(this.name)
//   }
// }
// let person = new Person()
// person.sayName.call({ name: "Nicolas" })
// 箭头函数不能改 this, Person 1
