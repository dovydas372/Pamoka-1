const express = require("express");
const router = express.Router();
const Pockel = require("../models/Pockels");

router.get("/main", (req, res, next) => {
  Pockel.find()
    .sort({ createAt: -1 })
    .then((result) =>
      res.render("index", { title: "visi Pockels", pockels: result })
    )
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/", (req, res) => {
  res.redirect("/main");
});

module.exports = router;
