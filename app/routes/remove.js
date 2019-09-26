const utils = require('./../utils')

module.exports = router => {
  router.get('/application/:applicationId/:section/:id/remove', (req, res) => {
    const applicationData = utils.applicationData(req)
    const id = req.params.id
    const referrer = req.query.referrer
    const section = req.params.section
    const item = applicationData[section][id]

    let parent
    let type
    switch (section) {
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

      case 'referees': {
        parent = `${utils.capitaliseFirstLetter(item.id)} referee`
        type = 'referee'
        break
      }

      case 'school-experience': {
        parent = item.role ? item.role : 'School experience and volunteering'
        type = 'role'
        break
      }

      case 'work-history': {
        parent = item.role ? item.role : 'Work history'
        type = item.role ? 'job' : 'gap'
        break
      }
    }

    res.render('application/remove', {
      id,
      item,
      parent,
      referrer,
      section,
      type
    })
  })

  router.post('/application/:applicationId/:section/:id/remove', (req, res) => {
    const applicationData = utils.applicationData(req)
    const id = req.params.id
    const referrer = req.query.referrer
    const section = req.params.section

    delete applicationData[section][id]

    res.redirect(referrer)
  })
}
