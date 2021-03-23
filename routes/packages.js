var express = require("express");
var router = express.Router();

/* GET packages page. */
router.get("/", function (req, res, next) {
  res.render("packages", { title: "Packages" });
});

router.get("/:asian", function (req, res, next) {
  res.render("asia", { title: "Asia" });
});

module.exports = router;
