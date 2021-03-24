var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Index" });
});

// router.get("/packages", function (req, res, next) {
//   res.render("packages", { title: "packages" });
// }); GV moved to packages router

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "contact" });
});

// router.get("/register", function (req, res, next) {
//   res.render("register", { title: "register" });
// });

router.get("/thankyou", function (req, res, next) {
  res.render("thankyou", { title: "thankyou" });
});

module.exports = router;
