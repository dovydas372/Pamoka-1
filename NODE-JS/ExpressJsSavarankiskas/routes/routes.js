const express = require("express");
const router = express.Router();
const Book = require("../model/book");

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

// router.put("/books/update/:id ", (req, res) => {
//   const BookId = req.params.id;

//   Book.findByIdAndUpdate(BookId, { $inc: { likes: -1 } }, { new: true })
//     .then((updatedBook) => res.json(""))
//     .catch((err) => res.status(500).json({ error: err.message }));
// });

router.get("/books/update/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then((result) =>
      res.render("update", { title: `book details`, book: result })
    )
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/books/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then((result) =>
      res.render("details", { title: `book details`, book: result })
    )
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.delete("/books/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id)
    .then((result) => {
      res.json("/books");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

module.exports = router;
