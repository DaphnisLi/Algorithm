// 函数柯里化
const curry = function (fn) {
  const params = [...arguments].slice(1)
  const fnParamsLength = fn.length
  return function () {
    const _params = [...params, ...arguments]

    if (fnParamsLength > _params.length) {
      return curry.call(this, fn, ..._params)
    } else {
      return fn.apply(this, _params)
    }
  }
}

const fn = curry((a, b, c) => {
  // console.log([a, b, c])
})

fn(1, 2, 3)
fn(1, 2)(3)
fn(1)(2)(3)
fn(1)(2, 3)
