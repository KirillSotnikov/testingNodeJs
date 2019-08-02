const db = require('../models/db')

module.exports.getRequests = function(req, res) {
  const requests = db
    .get('requests')
    .sortBy('status')
    .value()
  res.render('pages/requests-list', {requests: requests, userData: req.userData})
}

module.exports.successRequests = function(req, res) {
  const requests = db
    .get('requests')
    .filter({status: false})
    .value()
  res.render('pages/requests-success', {requests: requests, userData: req.userData})
}

module.exports.deleteRequest = async function(req, res) {
  try{
    let requestID = req.body.id
    const requestCurrent = await db.get('requests')
      .find({id:requestID})
      .value();

    db.get('requests')
    .remove(requestCurrent)
    .write()

    res.redirect('/requests-list');
  } catch (err) {
    throw new Error(err)
  }
}

module.exports.setStatusRequest = async function(req, res) {
  try{
    let requestID = req.body.id
    await db.get('requests')
      .find({id:requestID})
      .assign({status: true})
      .write()

    res.redirect('/requests-list');
  } catch (err) {
    throw new Error(err)
  }
}
module.exports.setStatusRequestFalse = async function(req, res) {
  try{
    let requestID = req.body.id
    await db.get('requests')
      .find({id:requestID})
      .assign({status: false})
      .write()

    res.redirect('/requests-list');
  } catch (err) {
    throw new Error(err)
  }
}