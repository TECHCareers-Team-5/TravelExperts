var express = require("express");
const booking = require("../models/booking");
var router = express.Router();
const {Booking} = require('../models/booking');

/*Get user listings */
router.get("/booking", function (req, res, next) {
    const BookingID = req.params.bkgID;
    const query = {BookingID: bkgID};
    Booking.findOne(query, (err, bookings) => {
        if (err) {
            console.log(err);
            next(err);
        }
        console.log(bookings);
        res.render("booking",{bookings: bookings});
    });
});



module.exports = router;