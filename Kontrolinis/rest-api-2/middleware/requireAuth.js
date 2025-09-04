import jwt from "jsonwebtoken";
import User from "../models/User.js";

const requireAuth = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    console.log(err);
    res.redirect("/login");
  }
};

export default requireAuth;
