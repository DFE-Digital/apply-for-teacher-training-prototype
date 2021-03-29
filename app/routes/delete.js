const utils = require('./../utils')

module.exports = router => {
  router.get('/application/:applicationId/:section/:id/delete', (req, res) => {
    const application = utils.applicationData(req)
    const { referrer } = req.query
    let { id, section } = req.params

    switch (section) {
      case 'other-qualifications': {
        section = 'otherQualifications'
        break
      }

      case 'unpaid-experience': {
        section = 'unpaidExperience'
        break
      }

      case 'work-history': {
        section = 'workHistory'
        break
      }
    }

    const item = application[section][id]

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

      case 'unpaid-experience': {
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
      referrer,
      section,
      type
    })
  })

  router.post('/application/:applicationId/:section/:id/delete', (req, res) => {
    const application = utils.applicationData(req)
    const { referrer } = req.query
    let { id, section } = req.params

    switch (section) {
      case 'other-qualifications': {
        section = 'otherQualifications'
        break
      }

      case 'unpaid-experience': {
        section = 'unpaidExperience'
        break
      }

      case 'work-history': {
        section = 'workHistory'
        break
      }
    }

    delete application[section][id]

    res.redirect(referrer)
  })
}
