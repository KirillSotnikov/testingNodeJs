const db = require('../models/db')

module.exports.getPortfolio = function(req, res) {
  const portfolioData = db
    .getState()
    .portfolioData || []
  res.render('pages/portfolio', {portfolioData: portfolioData})
}