let mongoose = require('mongoose');

//create a model class
let contactModel = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String    
},
{
   collection: "contacts" 
});

module.exports = mongoose.model('Contact', contactModel);