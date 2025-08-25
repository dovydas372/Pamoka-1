import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const setUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findById(decoded._id).select("_id email");
      res.locals.user = user;
    } catch (err) {
      console.error(err);
      res.locals.user = null;
    }
  } else {
    res.locals.user = null;
  }
  next();
};
