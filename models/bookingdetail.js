const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const mongoDB =
  "mongodb+srv://team5access:mostafa@cluster0.wspcn.mongodb.net/TravelExperts?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

/// To log the Mongoose errors to the console directly

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Mongoose is connected to the TravelExperts Booking Details");
});

const bookingdetailSchema = new mongoose.Schema({
  BookingDetailId: Number,
  ItineraryNo: Number,
  TripStart: Date,
  TripEnd: Date,
  Description: String,
  Destination: String,
  BasePrice: Decimal128,
  AgencyCommission: Decimal128,
  BookingId: Number,
  RegionId: String,
  ClassId: String,
  FeeId: String,
  ProductSupplierId: Number,
});

// create a model Customers useing customersSchema
module.exports = mongoose.model("Bookingdetail", bookingdetailSchema);
