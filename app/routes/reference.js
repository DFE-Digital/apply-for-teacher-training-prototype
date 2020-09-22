/**
 * Reference routes
 */
module.exports = router => {
  router.get('/reference', (req, res) => {
    res.render('reference/index', {
      referrer: req.query.referrer,
      type: req.query.type
    })
  })

  router.get('/reference/:view', (req, res) => {
    res.render(`reference/${req.params.view}`, {
      referrer: req.query.referrer,
      type: req.query.type
    })
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
