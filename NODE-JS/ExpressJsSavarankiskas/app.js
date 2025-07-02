const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const server = express();
const bookRoutes = require("./routes/routes");
const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/node1";

mongoose.connect(dbUri).then(() => server.listen(3000));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "assets")));
server.use(express.urlencoded({ extended: true }));

server.use(bookRoutes);

server.use((req, res) => {
  res.status(404).render("404", { title: "klaida" });
});
