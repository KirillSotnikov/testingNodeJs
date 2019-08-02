const db = require('../models/db')


module.exports.getPage = async function(req, res) {
  const pageId = req.params.id
  console.log(pageId)
  const portfolioData = await db
    .get('portfolioData')
    .value();
  let portfolioCurrent = portfolioData.find(item => {
    return item.id == pageId
  })
  res.render('pages/portfolio-page', {portfolioCurrent: portfolioCurrent, userData: req.userData})
}

module.exports.editPortfolio = async function(req, res) {
  const pageId = req.params.id
  const portfolioData = await db
    .get('portfolioData')
    .value();
  let portfolioCurrent = portfolioData.find(item => {
    return item.id == pageId
  })
  res.render('pages/edit-portfolio', {portfolioCurrent: portfolioCurrent, userData: req.userData})
}

module.exports.editPortfolioMethod = async function(req, res) {
  const pageId = req.params.id
  await db
    .get('portfolioData')
    .find({id:pageId})
    .assign({title: req.body.title, description: req.body.description})
    .write()
    
  res.redirect('/portfolio')
}