const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const mongoDB = "mongodb://127.0.0.1/registerDB";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

/// To log the Mongoose erros to the console directly

db.on("error", console.error.bind(console, "connection error:"));

const postSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },

  lname: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    trim: true,
  },
});

module.exports.User = mongoose.model("User", postSchema);
