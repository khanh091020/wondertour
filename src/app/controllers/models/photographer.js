const mongoose = require('mongoose');;
const schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');

  const photographer = new schema({
      id : Number,
      img : String,
      img1 : String ,
      img2 : String ,
      img3 : String ,
      firstName : String,
      lastName : String,
      style : String,
      like : String,
      address : String,
      language : String,
      age : Number,
      email : String,
      phone : Number,
      slug : String
  
      
  }, {
      collection : 'photographer', 
      timestamps: true,
     
  })


  module.exports = mongoose.model('photographer',photographer);