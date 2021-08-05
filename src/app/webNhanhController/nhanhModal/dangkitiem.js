const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listDangKiTiem = new Schema({
     tiensutiem14 : Boolean,
     tiensucovid : Boolean,
     muitiem : Number,
     uutien : String,
     natinonal : String,
     ward : String,
     distric : String,
     city : String,
     address : String,
     dantoc : String,
     dateTiem : Date,
     bhyt : Number,
     cmnd : Number,
     phone : Number,
     gender : String,
     birthDay : Date,
     name : String,
      idUser : {type : Schema.Types.ObjectId, ref : 'account'}
},
{collection : 'listDangKiTiem'}
)

module.exports = mongoose.model('listDangKiTiem',listDangKiTiem)