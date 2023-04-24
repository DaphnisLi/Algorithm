
const myInstanceof = (left, right) => {
  let proto = left.__proto__
  const prototype = right.prototype
  while (true) {
    // 到头了
    if (proto === null) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = proto.__proto__
  }
}
