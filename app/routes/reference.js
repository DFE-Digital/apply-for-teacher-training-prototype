/**
 * Reference routes
 */
module.exports = router => {
  router.post('/reference', (req, res) => {
    res.redirect('/reference/relationship')
  })

  router.get('/reference/:template', (req, res) => {
    res.render(`reference/${req.params.template}`, {
      referrer: req.query.referrer,
      type: req.query.type
    })
  })

  router.post('/reference/safeguarding/answer', (req, res) => {
    const { concern } = req.session.data.reference.safeguarding
    if (concern === 'Yes') {
      res.redirect('/reference/review')
    } else {
      res.redirect('/reference/comments')
    }
  })

  router.post('/reference/finish/answer', (req, res) => {
    const { research } = req.session.data.reference
    if (research === 'yes') {
      res.redirect('/reference/finish?research=true')
    } else {
      res.redirect('/reference/finish')
    }
  })

  router.get('/reference/finish', (req, res) => {
    const { research } = req.query
    res.render('reference/finish', {
      research
    })
  })
}
