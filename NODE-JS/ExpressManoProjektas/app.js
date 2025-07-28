const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

const Routes = require("./routes/Routes");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/Projektas";

mongoose.connect(dbUri).then(() => app.listen(3000));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// server.use(cookieParser());
app.use(Routes);

// app.use((req, res) => {
//   res.status(404).render("404", { title: "klaida" });
// });
