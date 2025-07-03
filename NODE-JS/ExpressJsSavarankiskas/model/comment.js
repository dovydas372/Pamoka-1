const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema(
  {
    bookId: { type: String, required: false },
    name: { type: String, required: true },
    text: { type: String, required: true },
    likes: { type: Number, required: false },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
