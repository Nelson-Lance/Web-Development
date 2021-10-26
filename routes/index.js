var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

/* GET Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Login page. */
router.get('/login', indexController.processLoginPage);

/* GET Logout. */
router.get('/logout', indexController.performLogout);

module.exports = router;
