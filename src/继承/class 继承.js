class person {
  constructor () {
    this.kind = 'person'
  }

  eat (food) {
    console.log(this.name + ' ' + food)
  }
}

class student extends person {
  constructor (name) {
    super()
    this.name = name
  }
}

const martin = new student('martin')
console.log(martin.kind) // person
martin.eat('apple') // martin apple
