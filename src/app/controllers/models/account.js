const mongoose = require('mongoose');
const schema = mongoose.Schema;

const account = new schema({
    _id : String,
    firstName : String,
    lastName : String,
    email : String,
    password : String
},
{
    collection : 'account'
})

const accountModel = mongoose.model('account',account);
module.exports = accountModel;