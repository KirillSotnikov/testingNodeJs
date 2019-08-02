const db = require('../models/db')

module.exports.getIndex = function(req, res) {
  res.render('pages/index', {title: 'Main', userData: req.userData})
}

module.exports.sendRequest = async function(req, res) {
  try{
    let unicId = '_' + Math.random().toString(36).substr(2, 9)
    console.log(unicId)
    await db
      .get('requests')
      .push({
        id: unicId,
        status: false,
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