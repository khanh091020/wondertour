const mongoose = require('mongoose');
const dotevn = require('dotenv')
 async function connect() {
dotevn.config();
   try {
    await mongoose.connect(process.env.database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('sucess');
      
   } catch (error) {
       console.log('failuse');
   }

}

module.exports = {connect};