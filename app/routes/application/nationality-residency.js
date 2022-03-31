
module.exports = router => {
  // First page
  router.get('/application/:applicationId/nationality-residency', (req, res) => {
    const { referrer } = req.query

    res.render('application/nationality-residency/nationality', {
      referrer
    })
  })

  // Nationality answer branching
  router.post('/application/:applicationId/nationality-residency/nationality-answer', (req, res) => {

    const { referrer } = req.session.data
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const candidate = application.candidate

    if (candidate.nationality.includes('British') || candidate.nationality.includes('Irish')) {
      res.redirect(referrer || `/application/${applicationId}/nationality-residency/living`)
    } else {
      res.redirect(`/application/${applicationId}/nationality-residency/immigration`)
    }
  })

  // Immigration question answer branching
  router.post('/application/:applicationId/nationality-residency/immigration', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const answer = application.candidate.immigration

    if (answer === 'Yes') {
      res.redirect(`/application/${applicationId}/nationality-residency/immigration-status`)
    } else {
      res.redirect(`/application/${applicationId}/nationality-residency/review`)
    }
  })

  // Already living in the UK? filter question
  router.post('/application/:applicationId/nationality-residency/already-living-in-uk', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const answer = application.candidate.alreadyLivingInUk

    if (answer === 'Yes') {
      res.redirect(`/application/${applicationId}/nationality-residency/date-of-entry`)
    } else {
      res.redirect(`/application/${applicationId}/nationality-residency/review`)
    }
  })

  // Render immigration status page
  router.get('/application/:applicationId/nationality-residency/immigration-status', (req, res) => {
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

    res.render('application/nationality-residency/immigration-status', {
      referrer,
      isEuropeanCitizen
    })
  })

  // Update immigration status
  router.post('/application/:applicationId/nationality-residency/immigration-status', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]

    if (
      application.candidate.immigrationStatus == 'EU settled status' ||
      application.candidate.immigrationStatus == 'EU pre-settled status'
    ) {
      res.redirect(`/application/${applicationId}/nationality-residency/living`)
    } else {
      res.redirect(`/application/${applicationId}/nationality-residency/review`)
    }

  })

  // Answer question about where you’ve been living
  router.post('/application/:applicationId/nationality-residency/living-answer', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const answer = application.candidate.living

    res.redirect(`/application/${applicationId}/nationality-residency/review`)

  })

  // Render other personal information pages
  router.get('/application/:applicationId/nationality-residency/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/nationality-residency/${view}`, {
      referrer
    })
  })
}
