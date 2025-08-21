const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, required: false },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
