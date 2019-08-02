const {Portfolio} = require('../models/db')

const createNewPortfolio = async (data) => {
  const portfolioItem = await new Portfolio(data)

  const dbCall = await portfolioItem.save()
}

module.exports.getPortfolio = async function(req, res) {
  const portfolioData = await Portfolio.find()
  res.render('pages/portfolio', {portfolioData: portfolioData})
}

module.exports.addPortfolio = function(req, res) {
  res.render('pages/add-portfolio')
}

module.exports.addPortfolioMethod = async function(req, res) {
  let unicId = '_' + Math.random().toString(36).substr(2, 9)
  let data = {
      id: unicId, 
      title: req.body.title,
      description: req.body.description
  }
  createNewPortfolio(data)
  res.redirect('/portfolio')
}

module.exports.deletePortfolio = async function(req, res) {
  let portfolioId = req.body.id
  await Portfolio.remove({id: portfolioId})

  res.redirect('/portfolio')
}