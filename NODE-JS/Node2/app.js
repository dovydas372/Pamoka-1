const express = require("express");
const mongoose = require("mongoose");
const server = express();
const authRoutes = require("./routes/authRoutes");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/Node2";

mongoose.connect(dbUri).then(() => server.listen(3000));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded());
server.use(authRoutes);
