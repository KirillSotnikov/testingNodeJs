const db = require('../models/db')

module.exports.getIndex = function(req, res) {
  res.render('pages/index', {title: 'Main'})
}

module.exports.sendRequest = async function(req, res) {
  try{
    await db
      .get('requests')
      .push({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text
      })
      .write()
      
    res.json({success:true});
  } catch (err) {
    throw new Error(err)
  }
}