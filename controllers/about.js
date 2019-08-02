const {About} = require('../models/db')

module.exports.getAbout = async function(req, res) {
  let aboutInfo = await About.findOne()
  res.render('pages/about', {aboutInfo: aboutInfo, userData: req.userData})
}

module.exports.getEditAboutPage = async function(req, res) {
  let aboutInfo = await About.findOne()
  res.render('pages/edit-about', {aboutInfo: aboutInfo})
}
module.exports.getEditAboutInfo = async function(req, res) {
  await About.update({}, {$set: {title : req.body.title, description: req.body.description}})
  res.redirect('/about')
}