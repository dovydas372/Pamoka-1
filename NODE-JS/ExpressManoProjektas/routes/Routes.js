const express = require("express");
const router = express.Router();
const PockelsCells = require("../models/PockelsCell");
const Users = require("../models/Users");
const authController = require("../controller/authController");
const { requireAuth } = require("../middleWare/AuthMiddleware");

router.get("/main", requireAuth, (req, res, next) => {
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

router.get("/pockelsCell/:id/:SN", requireAuth, (req, res, next) => {
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

//user//

router.get("/users", requireAuth, (req, res, next) => {
  Users.find()
    .then((result) => {
      res.render("usersList", {
        users: result,
        title: `All users`,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/user/:id", requireAuth, (req, res, next) => {
  const id = req.params.id;
  Users.findById(id)
    .then((result) => {
      res.render("userDetails", {
        user: result,
        title: `User`,
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

router.get("/CreatePockelsCell", requireAuth, (req, res) => {
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

/*authent*/
router.get("/login", (req, res, next) => {
  res.render("login", { title: "Log in" });
});

router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign up" });
});

router.get("/logout", authController.logout_get, (req, res, next) => {
  res.redirect("/login");
});
router.post("/login", authController.login_post);
router.post("/signup", authController.signup_post);

module.exports = router;
