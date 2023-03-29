const { arr } = require('./arr')

// 分解
const partition = (arr, left, right) => {
  const mid = Math.floor((left + right) / 2)
  // mid 左边全是小的, 右边全是大的
  while (left <= right) {
    while (arr[left] < arr[mid]) {
      left++
    }
    while (arr[right] > arr[mid]) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return left
}

// 递归分解
const main = (arr, left, right) => {
  if (arr.length === 1) return
  const index = partition(arr, left, right)
  // 右边是排好序的
  if (left < index - 1) {
    main(arr, left, index - 1)
  }
  if (index < right) {
    main(arr, index, right)
  }
}

const quickSort = (arr) => {
  const left = 0
  const right = arr.length - 1
  main(arr, left, right)
  return arr
}

console.log(quickSort(arr))
