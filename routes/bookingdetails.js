var express = require("express");
var router = express.Router();
const Bookingdetail = require ("../models/bookingdetail");

/* GET bookingdetails page. */
router.get("/", (req, res, next) => {
  Bookingdetail.find((err, bookingdetails) => {
      res.render("bookingdetail", {bookingdetails: bookingdetails});
  });
});

router.get("/:bkgId", function(req, res, next){
  console.log ("We are now in the bookingdetails end-point");
  const bkgId = req.params.bkgId;
  const querry = {BookingDetailId: bkgId};
  Bookingdetail.findOne(querry, (err, bookingdetail) =>{
    if (err) {
      console.log(err);
      next(err);
    }
    console.log(bookingdetails);
    res.render("bookingdetail", bookingdetail);
  });
});

module.exports = router;