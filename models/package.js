// Author - Grant van Boeschoten
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const mongoDB =
  "mongodb+srv://team5access:mostafa@cluster0.wspcn.mongodb.net/TravelExperts?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

/// To log the Mongoose erros to the console directly

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Mongoose is connected to the TravelExperts Database");
});

/* Int32
PkgName
:
Caribbean New Year
String
PkgStartDate
:
2005-12-25T00:00:00.000+00:00
Date
PkgEndDate
:
2006-01-04T00:00:00.000+00:00
Date
PkgDesc
:
Cruise the Caribbean & Celebrate the New Year.
String
PkgBasePrice
:
4800.0000
Decimal128
PkgAgencyCommission
:
400.0000 */

const packageSchema = new mongoose.Schema({
  PackageId: {
    type: Number,
  },

  PkgName: {
    type: String,
  },
});

// create a model Customers useing customersSchema
module.exports.Package = mongoose.model("Package", packageSchema);
