// 时间复杂度 log n

const findLastIndex = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      while (mid++) {
        if (target !== arr[mid]) {
          return mid - 1
        }
      }
    }
  }
  return -1
}
console.log(findLastIndex([1, 2, 3, 3, 3, 4, 5], 3))
