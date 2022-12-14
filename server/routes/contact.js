//contact route
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//helper function for guarding route
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}



let contactController = require('../controllers/contact');

/* GET route for the Contact List page = READ opertion */
router.get('/', contactController.displayContactList);

/*GET Route for displaying Add page - CREATE Operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/*POST Route for processing the Add page - CREATE Operation*/
router.post('/add', requireAuth, contactController.processAddPage);

/*GET Route for displaying Edit page - UPDATE Operation*/
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/*POST Route for processing Edit page - UPDATE Operation*/
router.post('/edit/:id',requireAuth, contactController.processEditPage);

/*GET Route to perform Deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;


