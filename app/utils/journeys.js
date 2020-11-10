const originalQuery = (req) => {
  const originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

const nextAndBackPaths = (paths, req) => {
  const currentPath = req.path
  const query = originalQuery(req)

  const index = paths.indexOf(currentPath)
  const next = paths[index + 1] || ''
  const back = paths[index - 1] || ''

  return {
    next: next + query,
    back: back + query,
    current: currentPath + query
  }
}

module.exports = {
  nextAndBackPaths
}
