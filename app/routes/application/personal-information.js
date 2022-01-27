const utils = require('../../utils')

module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-information', (req, res) => {
    const { referrer } = req.query

    res.render('application/personal-information/index', {
      referrer
    })
  })

  // Nationality answer branching
  router.post('/application/:applicationId/personal-information/nationality-answer', (req, res) => {
    const { referrer } = req.session.data
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const { nationality } = application.candidate
    const hasOtherNationality = nationality === 'Other' || nationality[0] === 'Other'

    if (hasOtherNationality) {
      // Delete lengthOfStay if previously entered
      delete application.candidate.lengthOfStay

      res.redirect(`/application/${applicationId}/personal-information/immigration?${utils.queryString(req)}`)
    } else {
      // Delete immigration status if previously entered
      delete application.candidate.immigration
      delete application.candidate.immigrationStatus
      delete application.candidate.immigrationStatusDetails

      res.redirect(referrer || `/application/${applicationId}/personal-information/review`)
    }
  })

  // Immigration question answer branching
  router.post('/application/:applicationId/personal-information/immigration', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const answer = application.candidate.immigration

    if (answer === 'Yes') {
      res.redirect(`/application/${applicationId}/personal-information/immigration-status`)
    } else {
      res.redirect(`/application/${applicationId}/personal-information/review`)
    }
  })

  // Already living in the UK? filter question
  router.post('/application/:applicationId/personal-information/already-living-in-uk', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const answer = application.candidate.alreadyLivingInUk

    if (answer === 'Yes') {
      res.redirect(`/application/${applicationId}/personal-information/date-of-entry`)
    } else {
      res.redirect(`/application/${applicationId}/personal-information/review`)
    }
  })

  // Render immigration status page
  router.get('/application/:applicationId/personal-information/immigration-status', (req, res) => {
    const { referrer } = req.query
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const { otherNationality1 } = application.candidate
    const europeanNationalities = [
      // EU (excluding Ireland)
      'Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Italian', 'Latvian', 'Lithuanian', 'Luxembourger', 'Maltese', 'Dutch', 'Polish', 'Portuguese', 'Romanian', 'Slovakian', 'Slovenian', 'Spanish', 'Swedish',
      // EEA
      'Icelandic', 'Liechtenstein citizen', 'Norwegian',
      // Switzerland
      'Swiss'
    ]
    const isEuropeanCitizen = europeanNationalities.includes(otherNationality1)

    res.render('application/personal-information/immigration-status', {
      referrer,
      isEuropeanCitizen
    })
  })

  // Update immigration status
  router.post('/application/:applicationId/personal-information/immigration-status', (req, res) => {
    const { applicationId } = req.params

    res.redirect(`/application/${applicationId}/personal-information/review`)
  })

  // Render other personal information pages
  router.get('/application/:applicationId/personal-information/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/personal-information/${view}`, {
      referrer
    })
  })
}
