const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const blogRoutes = require("./routes/blogRoutes");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/node1";

mongoose.connect(dbUri).then(() => app.listen(3002));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "klaida" });
});
