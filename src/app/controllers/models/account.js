const mongoose = require('mongoose');
const schema = mongoose.Schema;

const account = new schema({
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