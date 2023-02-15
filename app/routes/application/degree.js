const utils = require('./../../utils')

/**
 * Application: Degree routes
 */
module.exports = router => {
  // Generate new id and redirect to that degree
  router.get('/application/degree/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/degree/${id}/country`)
  })

  // Set the country
  router.post('/application/degree/:id/country-answer', (req, res) => {
    const { id } = req.params

    const uk = req.session.data.degrees[id].uk

    if (uk === 'no') {
      // Skip to subject
      res.redirect(`/application/degree/${id}/subject`)
    } else {
      res.redirect(`/application/degree/${id}/level`)
    }
  })

  // Set the degree subject
  router.post('/application/degree/:id/subject-answer', (req, res) => {
    const { id } = req.params

    const degree = req.session.data.degrees[id]

    if (degree.level === 'Foundation' || degree.level === 'Bachelor' || degree.level === 'Master’s' || degree.level === 'Doctorate') {
      // Ask follow-up question about type of degree
      res.redirect(`/application/degree/${id}/type`)
    } else {
      res.redirect(`/application/degree/${id}/institution`)
    }
  })

  // Render degree review page
  // Note: Must be defined before next route declaration
  router.get('/application/degree/review', (req, res) => {
    let meetsMinimumDegreeCriteria
    if (req.session.data.degrees) {
      const degrees = Object.keys(req.session.data.degrees)

      // Needs to have at least 1 degree which is not a Foundation degree
      meetsMinimumDegreeCriteria = (degrees.length > 0 && !(degrees.every(degree => degree.level === 'Foundation')))
    } else {
      meetsMinimumDegreeCriteria = false
    }

    res.render('application/degree/review', {
      meetsMinimumDegreeCriteria
    })
  })

  // Delete a degree
  router.post('/application/degree/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.degrees[id]

    res.redirect('/application/degree/review')
  })

  // Render degree pages
  router.get('/application/degree/:id/:view(country|subject|institution|completed|grade|enic|start-year|graduation-year|level|type|delete)', (req, res) => {
    const { id, view } = req.params

    res.render(`application/degree/${view}`, {
      id
    })
  })
}
