const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkUser } = require("./middleWare/AuthMiddleware");
const app = express();

const Routes = require("./routes/Routes");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/Projektas";

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

mongoose.connect(dbUri);
// .then(() => {
//   app.listen(3000, "0.0.0.0", () => {
//     console.log("Server running on port 3000");
//   });
// })
// .catch((err) => console.error("DB connection error:", err));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(checkUser);

app.use(Routes);

app.use((req, res) => {
  res.status(404).send("404", { title: "klaida" });
});
