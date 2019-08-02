const db = require('../../models/db')

module.exports.isAuthMiddleware = function(req, res, next) {
  req.userData = db.get('user').value()
  next()
}