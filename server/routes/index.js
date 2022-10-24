/*
index.js
Tarique Jemison
301266592
October 1, 2022
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);;

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contactme', indexController.displayContactPage);

/*GET Route for displaying Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/*GET Route for displaying Register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/*GET Route to perform Logout*/
router.get('/logout', indexController.performLogout);


module.exports = router;
