var mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

var mongoDB = "mongodb://127.0.0.1/registerDB";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

/// To log the Mongoose erros to the console directly

db.on("error", console.error.bind(console, "connection error:"));

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
    trim: true,
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports.Post = mongoose.model("Post", postSchema);
