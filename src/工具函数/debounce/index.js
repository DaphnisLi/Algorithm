// 防抖: 如果事件在 n 秒内再次触发, 那就重新计时
import { debounce6 as debounce } from './debounce.js'

const container = document.getElementById('container')

let count = 1

const getUserAction = function (event) {
  container.innerHTML = count++
  console.log(event)
  return 1
}

const debounced = debounce(getUserAction, 10000, true)
// onmousemove 鼠标移动就会触发
container.onmousemove = debounced

document.getElementById('button').addEventListener('click', function () {
  debounced.cancel()
})
