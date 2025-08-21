const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const Comment = require("../model/comment");
const authController = require("../controller/authController");
const { requireAuth } = require("../middleWare/AuthMiddleware");

router.get("/", (req, res) => {
  res.redirect("/books");
});

router.get("/books", (req, res) => {
  Book.find()
    .sort({ createAt: -1 })
    .then((result) =>
      res.render("index", { title: "All books", books: result })
    )
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/books/create", (req, res) => {
  res.render("createBook", { title: "Create book" });
});

router.post("/books", (req, res, next) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => res.redirect("/books"))
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.put("/books/update/:id", (req, res, next) => {
  const bookId = req.params.id;
  console.log(req.body);
  Book.findByIdAndUpdate(bookId, req.body, { new: true, runValidators: true })
    .then((updatedBook) => res.json("ok"))
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/books/update/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then((result) =>
      res.render("update", { title: `book edit`, book: result })
    )
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/books/:id", (req, res, next) => {
  const id = req.params.id;
  Book.findById(id)
    .then((book) => {
      return Comment.find({ bookId: id })
        .sort({ createdAt: -1 })
        .then((comments) => {
          if (comments.length > 0) {
            res.render("details", {
              title: "book details",
              book: book,
              comments: comments,
            });
          } else {
            res.render("details", {
              title: "book details",
              book: book,
              comments: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          next();
        });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/books/:id", requireAuth, (req, res, next) => {
  const id = req.params.id;

  const comment = new Comment({
    name: req.body.name,
    text: req.body.text,
    bookId: req.params.id,
  });
  comment
    .save()
    .then((result) => res.redirect(`/books/${id}`))
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.delete("/books/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id)
    .then((result) => {
      res.json("ok");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Log in" });
});

router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign up" });
});

router.get("/logout", authController.logout_get, (req, res, next) => {
  res.redirect("/");
});

router.post("/login", authController.login_post);
router.post("/signup", authController.signup_post);

module.exports = router;
