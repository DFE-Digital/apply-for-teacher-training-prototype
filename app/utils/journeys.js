function originalQuery (req) {
  var originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

function nextAndBackPaths (paths, currentPath, query) {
  var index = paths.indexOf(currentPath)
  var next = paths[index + 1] || ''
  var back = paths[index - 1] || ''

  return {
    next: next + query,
    back: back + query,
    current: currentPath + query
  }
}

function pickCoursePaths(req) {
  const applicationId = req.params.applicationId
  const courseId = req.params.courseId

  var paths = [
    `/application/${applicationId}`,
    `/application/${applicationId}/course/${courseId}/found`,
    `/application/${applicationId}/course/${courseId}/provider`,
    `/application/${applicationId}/course/${courseId}/pick`,
    `/application/${applicationId}/course/${courseId}/create`,
    `/application/${applicationId}`
  ]

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

function findCoursePaths(req) {
  const applicationId = req.params.applicationId
  const courseId = req.params.courseId

  var paths = [
    `/application/${applicationId}`,
    `/application/${applicationId}/course/${courseId}/found`,
    `/application/${applicationId}/course/${courseId}/find`
  ]

  return nextAndBackPaths(paths, req.path, originalQuery(req))
}

module.exports = {
  pickCoursePaths,
  findCoursePaths
}
