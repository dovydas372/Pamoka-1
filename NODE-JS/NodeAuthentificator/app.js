const express = require("express");
const mongoose = require("mongoose");
const server = express();
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleWare/AuthMiddleware");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/Node2";

mongoose.connect(dbUri).then(() => server.listen(3000));

server.use(cookieParser());
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded());

//routess
server.use(checkUser);
server.use(authRoutes);
server.get("/", (req, res) => {
  res.render("home");
});
server.get("/smoothies", requireAuth, (req, res) => {
  res.render("smoothies");
});
