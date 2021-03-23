const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports.init = function (app) {
  app.use(
    require("express-session")({
      secret: process.env.PASSPORT_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
  const { Customer } = require("./models/customerRegister");

  passport.use(
    new LocalStrategy(function (CustHomePhone, password, done) {
      User.findOne({ CustHomePhone: CustHomePhone }, function (err, user) {
        if (err) {
          return done(err);
        } // Error loading user from DB
        if (!customer) {
          return done(null, false);
        } // No user
        bcrypt.compare(password, customer.password, (err, res) => {
          if (res) {
            // passwords match! log user in
            return done(null, customer);
          } else {
            // passwords do not match!
            return done(null, false, { msg: "Incorrect password" });
          }
        });
      });
    })
  );

  passport.serializeUser(function (customer, done) {
    done(null, customer.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, customer) {
      done(err, customer);
    });
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/" }),
    function (req, res) {
      const headermessage = `Welcome ${req.customer?.username}`;
      res.redirect("/?headermessage=" + headermessage);
    }
  );

  app.use((req, res, next) => {
    res.locals.currentcustomer = req.customer;
    next();
  });
  app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
