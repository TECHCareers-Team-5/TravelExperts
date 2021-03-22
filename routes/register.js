var express = require("express");
var router = express.Router();
const { Customers } = require("../models/customerRegister");

/* GET users listing. */
router.get("/:signup", (req, res, next) => {
  res.render("signup", { title: "Sign Up" });
});

router.get("/", (req, res, next) => {
  res.render("login", { title: "Login" });
});

router.post("/register/", (req, res, next) => {
  const newCustomer = new Customers(req.body);
  newCustomer.save((err, result) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("register", {
        errors: errorArray,
      });
    }
    res.console.log(newCustomer);
    res.send(
      `New Account Created for ${result.CustFirstName} ${result.CustLastName}.`
    );
  });
  //   res.send("Customer Registered, Database Updated");
  //   next();
});

router.get("/package", function (req, res, next) {
  const {Package}=require('../models/package')
  Package.find(function (err, results) {
    if (err) return console.error(err);
    console.log(results[0].PkgName);
    res.render("register", { title: "Register" });
  })
});

module.exports = router;
