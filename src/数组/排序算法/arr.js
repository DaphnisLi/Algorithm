const arr = [1, 3, 1, 9, 7, 888, 55, 33, 77, 21313, 678]

const generateArray = (length) => {
  const arr = Array(length)
  for (let i = 0; i < length; i++) {
    arr[i] = Math.random()
  }
  return arr
}

module.exports = {
  arr,
  generateArray,
}
