const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    next();
  } else {
    res.redirect("/login");
  }
};
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "slaptas dalykas", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { checkUser, requireAuth };
