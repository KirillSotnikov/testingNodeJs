const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index')
const ctrlAbout = require('../controllers/about')
const ctrlContact = require('../controllers/contact')
const ctrlPortfolio = require('../controllers/portfolio')
const ctrlPortfolioSingle = require('../controllers/portfolio-single')
const ctrlRequestsList = require('../controllers/requests-list')
const middlewareAuth = require('../middleware/user')


router.get('/*', middlewareAuth.isAuthMiddleware)

router.get('/', ctrlHome.getIndex)
router.post('/send-request', ctrlHome.sendRequest)

router.get('/about', ctrlAbout.getAbout)
router.get('/edit-aboutinfo', ctrlAbout.getEditAboutPage)
router.post('/edit-about-info-method', ctrlAbout.getEditAboutInfo)

router.get('/portfolio', ctrlPortfolio.getPortfolio)

router.get('/portfolio/:id', ctrlPortfolioSingle.getPage)
router.get('/edit-portfolio/:id', ctrlPortfolioSingle.editPortfolio)


router.get('/add-portfolio', ctrlPortfolio.addPortfolio)
router.post('/add-portfolio-method', ctrlPortfolio.addPortfolioMethod)

router.post('/edit-portfolio-method/:id', ctrlPortfolioSingle.editPortfolioMethod)

router.get('/contact', ctrlContact.getContact)
router.post('/contact', ctrlContact.sendMail)

router.get('/requests', ctrlRequestsList.successRequests)

router.get('/requests-list', ctrlRequestsList.getRequests);
router.post('/delete-request', ctrlRequestsList.deleteRequest);
router.post('/success-request', ctrlRequestsList.setStatusRequest);
router.post('/success-request-false', ctrlRequestsList.setStatusRequestFalse);

module.exports = router;