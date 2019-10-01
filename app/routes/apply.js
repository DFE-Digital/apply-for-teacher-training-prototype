module.exports = router => {
  router.get('/apply/:providerCode/:courseCode', (req, res) => {
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    res.render('apply/index', {
      providerCode,
      courseCode
    })
  })
}
