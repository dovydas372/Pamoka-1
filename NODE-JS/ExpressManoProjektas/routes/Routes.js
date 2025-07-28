const express = require("express");
const router = express.Router();
const PockelsCells = require("../models/PockelsCell");

router.get("/main", (req, res, next) => {
  const searchType = req.query.type;
  const searchValue = req.query.value;
  let query = {};

  if (searchType && searchValue) {
    const numberFields = ["SN", "hrSN", "prizmesSN"];
    if (numberFields.includes(searchType)) {
      const parsed = Number(searchValue);
      if (!isNaN(parsed)) {
        query[searchType] = parsed;
      }
    } else {
      query[searchType] = searchValue;
    }
  }
  console.log(query);
  PockelsCells.find(query)
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "visi Pockels Cells",
        pockelsCells: result,
      });
    })
    .catch((err) => {
      console.log("Klaida ieškant PockelsCells:", err);
      next(err);
    });
});

router.get("/", (req, res) => {
  res.redirect("/main");
});

router.get("/pockelsCell/:id/:SN", (req, res, next) => {
  const id = req.params.id;
  const SN = req.params.SN;
  PockelsCells.findById(id)
    .then((result) => {
      res.render("pockelsCellDetails", {
        pockelsCell: result,
        title: `${SN}`,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/pockelsCell/update", async (req, res) => {
  const { id, field, value } = req.body;

  try {
    const updateObj = {};
    updateObj[field] = value;

    const updatedDoc = await PockelsCells.findByIdAndUpdate(id, updateObj, {
      new: true,
    });
    if (!updatedDoc) {
      return res
        .status(404)
        .json({ success: false, message: "Įrašas nerastas" });
    }

    res.json({ success: true, updated: updatedDoc });
  } catch (err) {
    console.error("Klaida atnaujinant įrašą:", err);
    res.status(500).json({ success: false, message: "Serverio klaida" });
  }
});

router.get("/CreatePockelsCell", (req, res) => {
  res.render("createPockelsCell", {
    title: "Pockels Cell create",
  });
});

router.post("/CreatePockelsCell", (req, res, next) => {
  const pockelCell = new PockelsCells(req.body);
  pockelCell
    .save()
    .then((result) => res.redirect("/main"))
    .catch((err) => {
      console.log(err);
      next();
    });
});

module.exports = router;
