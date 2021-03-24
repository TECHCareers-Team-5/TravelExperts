var express = require("express");
var router = express.Router();
const Bookingdetail = require ("../models/bookingdetail");

router.get("/", (req, res, next) => {
  Bookingdetail.find((err, bookingdetails) => {
    if (err) {
      console.log(err);
      next(err);
    }
    res.render("bookingdetails", { bookingdetails: bookingdetails });
  });
});

router.get("/:bkgId", function(req, res, next){
  const bkgId = req.params.bkgId;
  const query = {BookingDetailId: bkgId};
  Bookingdetail.findOne(query, (err, bookingdetail) => {
    if (err) {
      console.log(err);
      next(err);
    }
    res.render("bookingdetail", { bookingdetail });
  });
});

module.exports = router;