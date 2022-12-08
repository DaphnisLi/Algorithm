// 注: class 是函数
const typeMap = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Symbol]': 'symbol',
  '[object Null]': 'null',
  '[object Undefined]': 'undefined',

  '[object Object]': 'object',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',

  '[object Map]': 'map',
  '[object Set]': 'set',
  '[object Arguments]': 'arguments',
  '[object Math]': 'math',
  '[object JSON]': 'json',
  '[object Error]': 'error',
}
const getType = (value) => typeMap[Object.prototype.toString.call(value)]

const isObject = (value) => getType(value) === 'object'
const isArray = (value) => getType(value) === 'array'
const isMap = (value) => getType(value) === 'map'
const isSet = (value) => getType(value) === 'set'
const isDate = (value) => getType(value) === 'date'
const isError = (value) => getType(value) === 'error'

module.exports = {
  isObject,
  isArray,
  isMap,
  isSet,
  isDate,
  isError,
}
