const mongoose = require('mongoose');
const schema = mongoose.Schema;

  const city = new schema({
    city : String,
  }, {
      collection : 'cityDestination', 
  })

  module.exports = mongoose.model('city',city);