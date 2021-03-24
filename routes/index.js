var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Index" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "contact" });
});

router.get("/thankyou", function (req, res, next) {
  res.render("thankyou", { title: "thankyou" });
});

module.exports = router;
