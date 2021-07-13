const mongoose = require('mongoose');
const Schema = mongoose.Schema

const order = new Schema({
    username: {type : String,unique : true},
    phone : {type : Number,unique : true},
    userEmail : {type : String,ref : 'account'},
    tourDate : {type : String},
    tourID : {type : Number,ref : 'tours'},
    photographer : {type : Number},
    singerTour : {type : Boolean},
    adultNumber : {type :Number},
    chilrenNumber : {type : Number},
    totalPrice : {type : Number}
},{
    timestamps : true
})

module.exports = mongoose.model('orders',order);