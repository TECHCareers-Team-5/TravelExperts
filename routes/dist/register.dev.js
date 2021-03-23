"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../models/customerRegister"),
    Customers = _require.Customers;
/* GET users listing. */


router.use("/signup", function (req, res, next) {
  res.render("signup", {
    title: "Sign Up"
  });
});
router.get("/", function (req, res, next) {
  res.render("login", {
    title: "Login"
  });
});
router.post("/signup/", function (req, res, next) {
  var _require2 = require("../models/customerRegister"),
      Customers = _require2.Customers;

  var newCustomer = new Customers(req.body);
  newCustomer.save(function (err, result) {
    if (err) {
      var errorArray = [];
      var errorKeys = Object.keys(err.errors);
      errorKeys.forEach(function (key) {
        return errorArray.push(err.errors[key].message);
      });
      return res.render("signup", {
        errors: errorArray
      });
    }

    res.console.log(newCustomer);
    res.send("New Account Created for ".concat(result.CustFirstName, " ").concat(result.CustLastName, "."));
  });
});
router.get("/signup", function (req, res, next) {
  Customers.find(function (err, results) {
    if (err) return console.error(err);
    console.log(results[0].CustFirstName);
    res.render("/", {
      title: "Travel Experts"
    });
  });
});
router.get("/package", function (req, res, next) {
  var _require3 = require("../models/package"),
      Package = _require3.Package;

  Package.find(function (err, results) {
    if (err) return console.error(err);
    console.log(results[0].PkgName);
    res.render("login", {
      title: "login"
    });
  });
});
module.exports = router;