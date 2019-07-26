const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index')
const ctrlAbout = require('../controllers/about')
const ctrlContact = require('../controllers/contact')
const ctrlPortfolio = require('../controllers/portfolio')

router.get('/', ctrlHome.getIndex)
router.post('/send-request', ctrlHome.sendRequest)

router.get('/about', ctrlAbout.getAbout)

router.get('/portfolio', ctrlPortfolio.getPortfolio)

router.get('/contact', ctrlContact.getContact)
router.post('/contact', ctrlContact.sendMail)

module.exports = router;