const sortVersion = (versions) => {
  const getMinVersion = (versions, index) => {
    if (versions.length === 1) {
      return versions[0]
    }
    let min = +versions[0].split('.')[index]
    let arr = []
    for (const value of versions) {
      const num = +value.split('.')[index]
      if (min === num) {
        arr.push(value)
      } else if (num < min) {
        min = num
        arr = [value]
      }
    }
    return getMinVersion(arr, index + 1)
  }

  const res = []
  while (versions.length) {
    const minVersion = getMinVersion(versions, 0)
    res.push(minVersion)
    const index = versions.indexOf(minVersion)
    versions.splice(index, 1)
  }
  return res
}

console.log(sortVersion(['1.45.1', '0.9.1', '1.5.1', '2.3.2', '5.4.1']))
