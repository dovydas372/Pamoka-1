const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/Blog");
const blogRoutes = require("./routes/blogRoutes");
const res = require("express/lib/response");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/node1";

mongoose.connect(dbUri).then(() => app.listen(3002));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));
app.use(blogRoutes);

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res, next) => {
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

app.use(express.urlencoded({ extended: true }));

app.post("/blogs", (req, res, next) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => {
      console.log(err);
      next();
    });
});

app.get("/apie", (req, res) => {
  res.render("apie", { title: "apie" });
});

app.get("/blogs/create-blog", (req, res) => {
  res.render("create-blog", { title: "create-blog" });
});

app.get("/apieMus", (req, res) => {
  res.redirect("/apie");
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/blogs/:id", (req, res, next) => {
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

app.delete("/blogs/:id", (req, res, next) => {
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

app.put("/blogs/:id/like", (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndUpdate(blogId, { $inc: { likes: 1 } }, { new: true })
    .then((updatedBlog) => res.json(""))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.put("/blogs/:id/disslike", (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndUpdate(blogId, { $inc: { likes: -1 } }, { new: true })
    .then((updatedBlog) => res.json(""))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/single-blogs", (req, res) => {
  const id = req.params.id;
  Blog.findById("685d91d50941496051af97f2")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
app.get("/single-ID-blogs/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
      next();
    });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "klaida" });
});
