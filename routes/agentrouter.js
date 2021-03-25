var express = require("express");
var router = express.Router();
const { Agent } = require("../models/agent");
const { Customer } = require("../models/customerRegister");
const { Package } = require("../models/package");
const { Fee } = require("../models/fees");

/* GET agent listing. */
router.get("/", (req, res, next) => {
  res.render("agent", { title: "Agent" });
});

router.get("/auth", (req, res, next) => {
  res.render("authagent", { title: "Authorized Users Only" });
});

router.get("/auth/cust", (req, res, next) => {
  Customer.find((err, customers) => {
    res.render("authcust", { customers: customers });
  });
});

router.get("/auth/cust/:custID", (req, res, next) => {
  const info = req.params.custID;
  const query = { Customer: CustomerId };
  console.log(query);
  console.log(info);
  Customer.find(query, (err, result) => {
    if (err) {
      console.log(err);
      next(err);
    }
    res.render("custinfo", { result });
  });
});

// router.post("/auth/cust/:id", (req, res, next) => {
//   const custId = req.params.id;
//   const query = { Customer: CustomerId };
//   console.log(query);
//   console.log(custId);
//   Customer.findOne(query, (err, result) => {
//     if (err) {
//       console.log(err);
//       next(err);
//     }
//     res.render("custPhone", { result });
//   });
// });

// router.get("/p1/:pkgId", (req, res, next) => {
//   const pkgId = req.params.pkgId;
//   const query = { PackageId: pkgId };
//   console.log(query);
//   console.log(pkgId);
//   Package.findOne(query, (err, package) => {
//     if (err) {
//       console.log(err);
//       next(err);
//     }
//     res.render("pid", { package });
//   });
// });
// router.post("/agent", (req, res, next) => {
//   console.log("Agent Endpoint");
//   const { Customers } = require("../models/customerRegister");
//   const findCustomer = new Customer(req.body);
//   findCustomer.findone({ CustHomePhone: USERINPUT }),
//     function (err, result) {
//       if (err) throw error;
//       console.log(result);
//       res.render("data", {
//         fname: result.CustFirstName,
//         lname: result.CustLastName,
//         stAddress: result.CustAddress,
//         city: result.CustCity,
//         province: result.CustProv,
//         hPhone: result.CustHomePhone,
//         email: result.CustEmail,
//       });
//     };
// });

module.exports = router;
