const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/Blog");

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/node1";

mongoose.connect(dbUri).then(() => app.listen(3002));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Node.js įvadas",
      santrauka: "lroemadsdadasdasfdasdasdfasfafasfasfasfas",
    },
    {
      title: "Express.js įvadas",
      santrauka: "lroemadsdadasdasfdasdasdfasfafasfasfasfas",
    },
    {
      title: "Mondo DB įvadas",
      santrauka: "lroemadsdadasdasfdasdasdfasfafasfasfasfas",
    },
  ];
  res.render("index", { title: "pamokos", blogs });
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

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Nauja pamoka 1",
    santrauka: "Apie mano pamokas",
    body: "asdasdsadsad",
  });

  blog
    .save()
    .then((result) => {
      console.log("irasytas");
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
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
