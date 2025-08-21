const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const { error } = require("console");
const userScheme = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Prasau ivesti el. pasta"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "prasom ivesti teisinga el. pasto formata"],
  },
  password: {
    type: String,
    required: [true, "iveskit pass"],
    minlength: [6, "netrumpesnis nei 6"],
  },
});

userScheme.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});
userScheme.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
const User = mongoose.model("user", userScheme);

module.exports = User;
