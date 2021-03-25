var express = require("express");
var router = express.Router();
const { Package } = require("../models/package");

/* GET packages page. */
// router.get("/", function (req, res, next) {
//   res.render("packages", { title: "Packages" });
// });

// router.get("/asian", function (req, res, next) {
//   res.render("asia", { title: "Asia" });
// });

// router.get("/carribean", function (req, res, next) {
//   res.render("carribean", { title: "Carribean" });
// });

// router.get("/polynesia", function (req, res, next) {
//   res.render("polynesia", { title: "Polynesia" });
// });

// router.get("/europe", function (req, res, next) {
//   res.render("europe", { title: "Europe" });
// });

router.get("/", (req, res, next) => {
  Package.find((err, packages) => {
    res.render("packages", { packages: packages });
  });
});

router.get("/fee", (req, res, next) => {
  const { Fee } = require("../models/fees");
  Fee.find((err, fees) => {
    res.render("fee", { fees: fees });
  });
});

router.get("/:pkgId", (req, res, next) => {
  const pkgId = req.params.pkgId;
  const query = { PackageId: pkgId };
  console.log(query);
  console.log(pkgId);
  Package.findOne(query, (err, package) => {
    if (err) {
      console.log(err);
      next(err);
    }
    res.render("pid", { package });
  });
});

module.exports = router;
