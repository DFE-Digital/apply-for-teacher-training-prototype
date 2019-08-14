function originalQuery (req) {
  var originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

function nextAndBackPaths (paths, req) {
  var currentPath = req.path
  var query = originalQuery(req)

  var index = paths.indexOf(currentPath)
  var next = paths[index + 1] || ''
  var back = paths[index - 1] || ''

  return {
    next: next + query,
    back: back + query,
    current: currentPath + query
  }
}

module.exports = { nextAndBackPaths }
