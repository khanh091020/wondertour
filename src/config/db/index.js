const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://new__User1:MuZzhzT4HWDNYEzK@cluster0.gkzod.mongodb.net/travelweb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("sucess");
  } catch (error) {
    console.log("connect failuse");
  }
}

module.exports = { connect };
