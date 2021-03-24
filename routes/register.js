var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { Customer } = require("../models/customerRegister");

/* GET users listing. */
router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign Up" });
});

router.get("/", (req, res, next) => {
  res.render("login", { title: "Login" });
});

router.post("/signup", (req, res, next) => {
  console.log("signup endpoint");
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) throw err;
    // Replace the plain password with the hashed password
    req.body.password = hashedPassword;
    const newCustomer = new Customer(req.body);
    newCustomer.save((err, result) => {
      if (err) {
        const errorArray = [];
        const errorKeys = Object.keys(err.errors);
        errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
        return res.render("register", {
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
  //   res.send("Customer Registered, Database Updated");
  //   next();
});

router.get("/package", function (req, res, next) {
  const { Package } = require("../models/package");
  Package.find(function (err, results) {
    if (err) return console.error(err);
    console.log(results[0].PkgName);
    res.render("register", { title: "Register" });
  });
});

module.exports = router;
