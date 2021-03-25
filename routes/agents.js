var express = require("express");
const booking = require("../models/booking");
var router = express.Router();
const { Booking } = require("../models/booking");

/*Get user listings */
// router.get("/:bkgID", function (req, res, next) {
//   const BookingID = req.params.BookingId;
//   const query = { BookingID: bkgID };
//   BookingID.findOne(query, (err, bookings) => {
//     if (err) {
//       console.log(err);
//       next(err);
//     }
//     console.log(bookings);
//     res.render("bookings", { bookings: bookings });
//   });
// });

router.get("/", (req, res, next) => {
    Booking.find((err, bookings) => {
      res.render("bookings", { bookings: bookings });
    });
  });

module.exports = router;
