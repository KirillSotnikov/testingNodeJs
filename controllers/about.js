const db = require('../models/db')

module.exports.getAbout = function(req, res) {
  const aboutInfo = db
    .getState()
    .aboutInfo || []
  res.render('pages/about', {aboutInfo: aboutInfo})
}

module.exports.getEditAboutPage = function(req, res) {
  const aboutInfo = db
    .getState()
    .aboutInfo || []
  res.render('pages/edit-about', {aboutInfo: aboutInfo})
}
module.exports.getEditAboutInfo = async function(req, res) {
  await db
    .get('aboutInfo')
    .assign({
      title: req.body.title,
      description: req.body.description
    })
    .write()

  res.redirect('/about')
}