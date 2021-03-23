var express = require("express");
var router = express.Router();
const { Customers } = require("../models/customerRegister");
const { Package } = require("../models/package");

/* GET users listing. */
router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign Up" });
});

router.get("/", (req, res, next) => {
  res.render("login", { title: "Login" });
});

router.post("/signup", (req, res, next) => {
  console.log("Signup Endpoint");
  const { Customer } = require("../models/customerRegister");
  const newCustomer = new Customer(req.body);
  newCustomer.save((err, result) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("signup", {
        errors: errorArray,
      });
    }
    console.log(result);
    res.render("response", {
      fname: result.CustFirstName,
      lname: result.CustLastName,
    });
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

router.get("/agents", (req, res, next) => {});

module.exports = router;
