import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const setUser = async (req, res, next) => {
  const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1]; // naudok tą patį pavadinimą kaip login/signup

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findById(decoded._id).select("_id email");

      req.user = user;
      res.locals.user = user;
    } catch (err) {
      console.error("Token klaida:", err.message);
      req.user = null;
      res.locals.user = null;
    }
  } else {
    req.user = null;
    res.locals.user = null;
  }

  next();
};
