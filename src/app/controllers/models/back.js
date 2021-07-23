const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bank = new schema({
   
},
{
    collection : 'getListBank'
})

const bankModal = mongoose.model('getListBank',bank);
module.exports = bankModal;