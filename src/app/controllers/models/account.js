const mongoose = require('mongoose');
const schema = mongoose.Schema;

const account = new schema({
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