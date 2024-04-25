// 1、记录当前总长度cur, 左括号数量left, 右括号数量right
// 2、如果长度为2n, 放入结果数组中
// 3、如果左括号数量小于n, 加入左括号更新长度再遍历, 如果右括号数量小于左括号数量, 加入右括号更新长度再遍历
// 4、从cur为空, 左右括号数为0开始遍历, 返回结果

var main = function(n) {
  let res = []
  function fun(cur,left,right){
      if(cur.length == 2 * n){
          res.push(cur)
          return
      }
      // 当前为 (
      if(left < n){
          fun(cur + '(',left + 1,right) // ((
      }
      if(right < left){
          fun(cur + ')',left,right + 1) // ()
      }
  }
  fun('',0,0)
  return res
}

console.log(main(3))
 // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
