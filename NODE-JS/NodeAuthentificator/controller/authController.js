const { error } = require("console");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "el. pastas jau uzregistruotas";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

function signup_get(req, res) {
  res.render("signup");
}

function login_get(req, res) {
  res.render("login");
}

const createToken = (id) => {
  return jwt.sign({ id }, "slaptas dalykas", {
    expiresIn: 60 * 60 * 24 * 3,
  });
};

async function signup_post(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.status(201).json({ user: user._id });
  } catch (e) {
    const errors = handleErrors(e);
    res.status(404).json({ errors });
  }

  //   res.send(`${email} ${password}`);
}

async function login_post(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.status(201).json({ user: user._id });
  } catch (e) {
    const errors = handleErrors(e);
    if (e.message === "incorrect email") {
      errors.email = "email neuzregistruotas";
    }
    if (e.message === "incorrect password") {
      errors.password = "neteisingas password";
    }
    res.status(400).json({ errors });
  }
}

async function logout_get(req, res) {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
}

module.exports = {
  signup_get,
  login_post,
  signup_post,
  login_get,
  logout_get,
};
