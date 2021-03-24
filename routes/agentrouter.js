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
