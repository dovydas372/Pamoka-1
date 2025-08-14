import User from "../models/userModel.js";

//login in user

export const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

//signup user

export const signupUser = async (req, res) => {
  res.json({ mssg: "signup user" });
};
