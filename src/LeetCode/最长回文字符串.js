const main = (s) => {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const temp = s.slice(i, j)
      if (temp == temp.split("").reverse().join("") && temp.length > str.length) {
        str = temp
      }
    }
  }
  return str
}

console.log(main('babad'))
