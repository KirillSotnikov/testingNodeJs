const db = require('../models/db')

module.exports.getAbout = function(req, res) {
  const aboutInfo = db
    .getState()
    .aboutInfo || []
  res.render('pages/about', {aboutInfo: aboutInfo})
}