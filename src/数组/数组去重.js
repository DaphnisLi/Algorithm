// 1、双层循环, 外层循环 arr, 内层循环 res, 如果元素重复就结束内层循环, 不重复就 push
// 2、一层循环 + indexOf / includes
// 3、排序后检查相邻元素是否重复
// 4、filter + indexOf, return arr.indexOf(item) === index
// 5、排序后 filter, return index === 0 || item !== arr[index - 1] // 第一个元素 || 与前面的元素不相等
// 6、filter + 对象, return item in obj ? false : obj[item] = ''。但是有个问题, 1 和 '1' 对于对象的 key 来说都是一样的, 因为 key 都是 string, 所以可以用 typeof item + item 来做对象的 key。但是遇到 key 就对象就又不行了。可以用 typeof item + JSON.stringify(item) 来解决, 但 JSON.stringify 任何一个正则表达式的结果都是 {}, 事真多。
// 7、Set：[...new Set(arr)]
// 8、Map
// function unique (arr) {
//   const seen = new Map()
//   return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
// }
