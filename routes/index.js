const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index')
const ctrlAbout = require('../controllers/about')
const ctrlContact = require('../controllers/contact')
const ctrlPortfolio = require('../controllers/portfolio')
const ctrlPortfolioSingle = require('../controllers/portfolio-single')
const ctrlRequestsList = require('../controllers/requests-list')

router.get('/', ctrlHome.getIndex)
router.post('/send-request', ctrlHome.sendRequest)

router.get('/about', ctrlAbout.getAbout)

router.get('/portfolio', ctrlPortfolio.getPortfolio)

router.get('/portfolio/:id', ctrlPortfolioSingle.getPage)

router.get('/contact', ctrlContact.getContact)
router.post('/contact', ctrlContact.sendMail)

router.get('/requests-list', ctrlRequestsList.getRequests);
router.post('/delete-request', ctrlRequestsList.deleteRequest);

module.exports = router;