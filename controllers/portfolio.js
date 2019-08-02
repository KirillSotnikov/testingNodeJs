const db = require('../models/db')

module.exports.getPortfolio = function(req, res) {
  const portfolioData = db
    .getState()
    .portfolioData || []
  res.render('pages/portfolio', {portfolioData: portfolioData, userData: req.userData})
}

module.exports.addPortfolio = function(req, res) {
  const portfolioData = db
    .getState()
    .portfolioData || []
  res.render('pages/add-portfolio', {portfolioData: portfolioData, userData: req.userData})
}

module.exports.addPortfolioMethod = async function(req, res) {
  let unicId = '_' + Math.random().toString(36).substr(2, 9)
  await db.get('portfolioData')
    .push({
      id: unicId, 
      title: req.body.title,
      description: req.body.description
    })
    .write()
  res.redirect('/portfolio')
}