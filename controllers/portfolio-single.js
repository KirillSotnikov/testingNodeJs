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
  res.render('pages/portfolio-page', {portfolioCurrent: portfolioCurrent})
}