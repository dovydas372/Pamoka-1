import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  //validator
  if (!email || !password) {
    throw Error("Visi laukeliai privalomi");
  }
  if (!validator.isEmail(email)) {
    throw Error("El. paštas nėra tinkamas.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Slaptažodis pernelyg silpnas.");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("El. paštas jau naudojamas.");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

//statiškas login metodas
userSchema.statics.login = async function (email, password) {
  //validator
  if (!email || !password) {
    throw Error("Visi laukeliai privalomi");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("El. paštas neteisingas.");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Slaptažodis neteisingas");
  }

  return user;
};

export default mongoose.model("User", userSchema);
