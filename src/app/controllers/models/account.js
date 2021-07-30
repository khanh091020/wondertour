const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    loveTour : Array,
    phone : Number,
    address : String,
    admin : Boolean,
    boss : Boolean
    
},
{
    collection : 'account'
})

const accountModel = mongoose.model('account',account);
module.exports = accountModel;