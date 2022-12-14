// 防抖: n 秒能只能触发一次事件
import { throttle2 as throttle } from './throttle.js'

const container = document.getElementById('container')

let count = 1

const getUserAction = function (event) {
  container.innerHTML = count++
  console.log(event)
  return 1
}

const throttled = throttle(getUserAction, 1000)
// onmousemove 鼠标移动就会触发
container.onmousemove = throttled

// document.getElementById('button').addEventListener('click', function () {
//   debounced.cancel()
// })
