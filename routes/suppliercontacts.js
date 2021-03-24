var express = require("express");
const suppliercontact = require("../models/suppliercontact");
var router = express.Router();
const Suppliercontact = require("../models/suppliercontact");

router.get("/", function (req, res, next) {
  Suppliercontact.find((err, suppliercontacts) => {
    if (err) {
      console.log(err);
      next(err);
    }
    res.render("suppliercontacts", { suppliercontacts: suppliercontacts });
  });
});

module.exports = router;
