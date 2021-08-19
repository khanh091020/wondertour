const mongoose = require('mongoose');
const schema = mongoose.Schema;

  const comment = new schema({
     slugTour : String,
     comment : String,
     rate : Number,
     accountID : String,
     nameAccount : String
  }, {
      collection : 'comment', 
      timestamps: true
  })

  module.exports = mongoose.model('comment',comment);