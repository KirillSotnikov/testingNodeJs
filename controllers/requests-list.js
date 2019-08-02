const {User} = require('../models/db')

const createNewUser = async (data) => {
  const Vasya = await new User(data)

  const dbCall = await Vasya.save()
}



module.exports.sendRequest = async function(req, res) {
  try{
    let unicId = '_' + Math.random().toString(36).substr(2, 9)
    console.log(unicId)

    let data = {
      id: unicId,
      status: false,
      name: req.body.name,
      email: req.body.email,
      text: req.body.text
    }

    createNewUser(data)

    res.json({success:true});
  } catch (err) {
    throw new Error(err)
  }
}

module.exports.getRequests = async function(req, res) {
  let userData = await User.find().sort({status:-1})
  res.render('pages/requests-list', {requests: userData})
}

module.exports.successRequests = async function(req, res) {
  let userData = await User.find({status: true})
  res.render('pages/requests-success', {requests: userData})
}

module.exports.deleteRequest = async function(req, res) {
  try{
    let requestID = req.body.id
    
    await User.remove({id: requestID})

    res.redirect('/requests-list');
  } catch (err) {
    throw new Error(err)
  }
}

module.exports.setStatusRequest = async function(req, res) {
  try{
    let requestID = req.body.id

    await User.update({id: requestID}, {$set: {status : true}})

    res.redirect('/requests-list');
  } catch (err) {
    throw new Error(err)
  }
}
module.exports.setStatusRequestFalse = async function(req, res) {
  try{
    let requestID = req.body.id

    await User.update({id: requestID}, {$set: {status : false}})
    
    res.redirect('/requests-list');
  } catch (err) {
    throw new Error(err)
  }
}