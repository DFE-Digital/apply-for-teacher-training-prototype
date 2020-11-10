const utils = require('./../utils')

module.exports = router => {
  router.get('/application/:applicationId/:section/:id/delete', (req, res) => {
    const applicationData = utils.applicationData(req)
    const { id, section } = req.params
    const { phase, referrer } = req.query
    const item = applicationData[section][id]

    let parent
    let type
    switch (section) {
      case 'choices': {
        parent = item.type ? `${item.providerCode} ${item.courseCode}` : 'Course choices'
        type = 'choice'
        break
      }

      case 'degree': {
        parent = item.type ? `${item.type} ${item.subject}` : 'Degrees'
        type = 'degree'
        break
      }

      case 'other-qualifications': {
        parent = item.type ? `${item.type} ${item.subject}` : 'Other qualifications'
        type = 'qualification'
        break
      }

      case 'school-experience': {
        parent = item.role ? item.role : 'Volunteering with children and young people'
        type = 'role'
        break
      }

      case 'work-history': {
        parent = item.role ? item.role : 'Work history'
        type = 'entry'
        break
      }
    }

    res.render('application/delete', {
      id,
      item,
      parent,
      phase,
      referrer,
      section,
      type
    })
  })

  router.post('/application/:applicationId/:section/:id/delete', (req, res) => {
    const applicationData = utils.applicationData(req)
    const { id, section } = req.params
    const { phase, referrer } = req.query

    delete applicationData[section][id]

    if (phase) {
      res.redirect(`${referrer}?phase=${phase}`)
    } else {
      res.redirect(referrer)
    }
  })
}
