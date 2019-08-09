function originalQuery (req) {
  var originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

function nextAndBackPaths (paths, currentPath, query) {
  var index = paths.indexOf(currentPath)
  var next = paths[index + 1] || ''
  var back = paths[index - 1] || ''

  return {
    next: /confirm|edit/.test(next) ? next : next + query,
    back: /confirm|edit/.test(back) ? back : back + query,
    current: /confirm|edit/.test(back) ? currentPath : currentPath + query
  }
}

function pickCoursePaths (req) {
  var paths = [
    '/application',
    '/course/found',
    '/course/provider',
    '/course/pick',
    '/application'
  ]

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

module.exports = {
  pickCoursePaths
}
