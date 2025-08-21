const mongoose = require("mongoose");
const { isAlphanumeric } = require("validator");
const bcrypt = require("bcrypt");

const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Prašome įvesti vartotojo vardą"],
      unique: true,
      lowercase: true,
      validate: {
        validator: (username) => isAlphanumeric(username),
        message: "turi būti tik raidės arba skaičiai",
      },
    },
    password: {
      type: String,
      required: [true, "iveskit pass"],
      minlength: [4, "netrumpesnis nei 4"],
    },
  },
  { timestamps: true }
);

userScheme.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userScheme.statics.login = async function (username, password) {
  const user = await this.findOne({ username });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};
const User = mongoose.model("user", userScheme);

module.exports = User;
