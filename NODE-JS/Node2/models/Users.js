const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userScheme = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Prasau ivesti el. pasta"],
    unique: [true, "Toks el. pastas jau egzistuoja"],
    lowercase: true,
    validate: [isEmail, "prasom ivesti teisinga el. pasto formata"],
  },
  password: {
    type: String,
    required: [true, "iveskit pass"],
    minlength: [6, "netrumpesnis nei 6"],
  },
});

const User = mongoose.model("user", userScheme);

module.exports = User;
