const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", (req, res) => {
  res.redirect("/blogs");
});

router.get("/blogs", (req, res, next) => {
  Blog.find()
    .sort({ createAt: -1 })
    .then((result) =>
      res.render("index", { title: "Visos pamokos", blogs: result })
    )
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/blogs", (req, res, next) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/apie", (req, res) => {
  res.render("apie", { title: "apie" });
});

router.get("/blogs/create-blog", (req, res) => {
  res.render("create-blog", { title: "create-blog" });
});

router.get("/apieMus", (req, res) => {
  res.redirect("/apie");
});

router.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/blogs/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Pamokos turinys" });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.delete("/blogs/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json("/blogs");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.put("/blogs/:id/like", (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndUpdate(blogId, { $inc: { likes: 1 } }, { new: true })
    .then((updatedBlog) => res.json(""))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.put("/blogs/:id/disslike", (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndUpdate(blogId, { $inc: { likes: -1 } }, { new: true })
    .then((updatedBlog) => res.json(""))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/single-blogs", (req, res) => {
  const id = req.params.id;
  Blog.findById("685d91d50941496051af97f2")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
router.get("/single-ID-blogs/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
      next();
    });
});

module.exports = router;
