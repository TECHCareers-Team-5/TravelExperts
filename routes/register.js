var express = require("express");
var router = express.Router();
const { Customers } = require("../models/customerRegister");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("register", { title: "Register" });
});

router.post("/", (req, res, next) => {
  const newCustomer = new Customers(req.body);
  newCustomer.save((err, result) => {
    if (err) {
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      return res.render("register", {
        erros: errorArray,
      });
    }

    res.send(
      `New Account Created for ${result.CustFirstName} ${result.CustLastName}.`
    );
  });
  res.send("Customer Registered, Database Updated");
  next();
});

module.exports = router;
