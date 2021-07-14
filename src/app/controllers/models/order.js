const mongoose = require('mongoose');
const Schema = mongoose.Schema

const order = new Schema({
    userName: {type : String},
    phone : {type : Number},
    userEmail : {type : String, ref:'account'},
    tourDate : {type : String},
    tourID : {type : Number,ref : 'Tours'},
    photographer : {type : String},
    singerTour : {type : Boolean},
    adultNumber : {type :Number},
    chilrenNumber : {type : Number},
    totalPrice : {type : Number}
},{
    timestamps : true
})

module.exports = mongoose.model('orders',order);