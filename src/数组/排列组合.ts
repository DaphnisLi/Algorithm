const permutations = (arr: string[][]) => arr.reduce((pre, cur) => {
  const result: string[] = []
  pre.forEach(p => {
    cur.forEach(c => {
      result.push(p + c)
    })
  })
  return result
})

console.log(permutations([['a', 'b'], ['c', 'd'], ['e', 'f']])) // ['ace', 'acf', 'ade', 'adf', 'bce', 'bcf', 'bde', 'bdf']
