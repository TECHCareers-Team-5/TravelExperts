var mongoose = require("mongoose");
var Scheme = mongoose.Scheme;

const bookingScheme = new SchemaType( {
CustomerFirstName: String,
CustomerLastName: String,
CustomerAddress:String,
CustCity:String,
CustCountry:String,
CustomerHomePhone:Number,
Img:String
});

module.exports.Booking = mongoose.model("Booking", packageSchema);