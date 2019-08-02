const {Portfolio} = require('../models/db')


module.exports.getPage = async function(req, res) {
  const pageId = req.params.id
  const portfolioCurrent = await Portfolio.findOne({id:pageId})
  res.render('pages/portfolio-page', {portfolioCurrent: portfolioCurrent})
}

module.exports.editPortfolio = async function(req, res) {
  const pageId = req.params.id
  const portfolioCurrent = await Portfolio.findOne({id:pageId})
  res.render('pages/edit-portfolio', {portfolioCurrent: portfolioCurrent})
}

module.exports.editPortfolioMethod = async function(req, res) {
  const pageId = req.params.id
  await Portfolio.update({id: pageId}, {$set: {title : req.body.title, description: req.body.description}})
  res.redirect('/portfolio')
}