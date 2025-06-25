const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/apie", (req, res) => {
  res.sendFile("./views/apie.html", { root: __dirname });
});

app.get("/apieMus", (req, res) => {
  res.redirect("/apie");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.use((req, res, next) => {
  //////////su next veikia ant kiekvieno puslapio perejimo
  console.log("preita i kita psl");
  next();
});
