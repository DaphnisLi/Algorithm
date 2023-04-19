// 1、Math.random() - 0.5 随机得到一个正数、负数或是 0，如果是正数则降序排列，如果是负数则升序排列，如果是 0 就不变，然后不断的升序或者降序，最终得到一个乱序的数组。
const shuffle1 = (arr) => arr.sort(() => Math.random() - 0.5)

// 2、遍历, 每次都随机交换
const shuffle2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.ceil(Math.random() * i); // 0 ~ i / 10
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr
}

const arr = [1, 2, 3, 4, 5]

console.log(shuffle1(arr))
console.log(shuffle2(arr))
