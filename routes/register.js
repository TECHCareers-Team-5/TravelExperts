var express = require("express");
var router = express.Router();
const { Customers } = require("../models/customerRegister");
const { Package } = require("../models/package");

/* GET users listing. */
router.use("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign Up" });
});

router.get("/", (req, res, next) => {
  res.render("login", { title: "Login" });
});

router.post("/signup/", (req, res, next) => {
  const { Customer } = require("../models/customerRegister");
  Customer.save((err, result) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("signup", {
        errors: errorArray,
      });
    }
    res.console.log(Customer);
    res.send(
      `New Account Created for ${result.CustFirstName} ${result.CustLastName}.`
    );
  });
});

router.get("/package", function (req, res, next) {
  const { Package } = require("../models/package");
  Package.find(function (err, results) {
    if (err) return console.error(err);
    console.log(results[0].PkgName);
    res.render("login", { title: "login" });
  });
});

module.exports = router;
