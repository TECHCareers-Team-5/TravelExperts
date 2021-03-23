var express = require("express");
var router = express.Router();

/* GET packages page. */
router.get("/", function (req, res, next) {
  res.render("packages", { title: "Packages" });
});

router.get("/asian", function (req, res, next) {
  res.render("asia", { title: "Asia" });
});

router.get("/carribean", function (req, res, next) {
  res.render("carribean", { title: "Carribean" });
});

router.get("/polynesia", function (req, res, next) {
  res.render("polynesia", { title: "Polynesia" });
});

router.get("/europe", function (req, res, next) {
  res.render("europe", { title: "Europe" });
});

module.exports = router;
