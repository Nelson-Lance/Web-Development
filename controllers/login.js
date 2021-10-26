let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect login model
let Login = require('../models/login');

module.exports.displayContactList =  (req, res, next)=>{
    Login.find((err, Users) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(Users);

            res.render('Business_Contacts', {title: 'Users', account: Users})
        }
    })
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business_contacts/add', {title: 'Add Contact'})
}

module.exports.processAddPage = (req, res, next) =>{
    let newContact = Login({
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "username": req.body.username,
        "email": req.body.email,
        "phone": req.body.phone
    });

    Login.create(newContact, (err, Login)=> {

        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/business_contacts');
        }
    });
}

module.exports.displayUpdatePage = (req, res, next) => {

    let id = req.params.id; 

    Login.findById(id, (err, contactToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('Update', {title: 'Edit Contact', contact: contactToEdit})
        }
    });
};

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id

    let updateContact = Login({
        "_id": id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "username": req.body.username,
        "email": req.body.email,
        "phone": req.body.phone
        });

    Login.updateOne({_id: id}, updateContact, (err) => {

        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            // refresh the contact list
            res.redirect('/business_contacts');
        }
    });
}

module.exports.performDelete = (req, res, next) => {

    let id = req.params.id; 

    Login.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // refresh the contact list
            res.redirect('/business_contacts');
        }
    });
}