let mongoose = require('mongoose');

//create a model class
let usersModel = mongoose.Schema({
    username: String,
    password: String, 
    email: String,
    first_name: String,
    last_name: String,
    phone: String
},
{
    collection: "login"
});

module.exports = mongoose.model('Login', usersModel);