interface Option {
  value: string
  children: Option[]
}
const getOptionsAllPaths = (options: Option[]) => {
  if (options?.length === 0) return []

  const paths: Option[][] = []
  const getCurrentPaths = (option: Option, path: Option[]) => {
    path.push(option)
    if (option?.children) {
      option.children?.forEach?.(item => {
        getCurrentPaths(item, [...path])
      })
    } else {
      paths.push(path)
    }
  }
  options?.forEach(item => {
    getCurrentPaths(item, [])
  })
  return paths
}
getOptionsAllPaths([])
