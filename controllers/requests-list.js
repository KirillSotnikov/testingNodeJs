const db = require('../models/db')

module.exports.getRequests = function(req, res) {
  const requests = db
    .getState()
    .requests || []
  res.render('pages/requests-list', {requests: requests})
}

module.exports.deleteRequest = async function(req, res) {
  try{
    let requestID = req.body['id']
    const requestBase = await db
      .get('requests')
      .value();
    let requestCurrent = requestBase.find(item => {
      return item.id == requestID
    })
    await db.get('requests')
    .remove(requestCurrent)
    .write()

    res.redirect('/requests-list')
  } catch (err) {
    throw new Error(err)
  }
}