const db = require('../models/db')

module.exports.getIndex = function(req, res) {
  console.log(db.User)
  res.render('pages/index', {title: 'Send Request ', userData: req.userData})
}