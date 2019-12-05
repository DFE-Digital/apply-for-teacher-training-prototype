/**
 * Reference routes
 */
module.exports = router => {
  router.get('/reference/participation/answer', (req, res) => {
    const { participation } = req.session.data.reference
    if (participation === 'yes') {
      res.redirect('/reference/details')
    } else {
      res.redirect('/reference/decline')
    }
  })

  router.get('/reference/finish/answer', (req, res) => {
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
