const { error } = require("console");
const User = require("../models/Users");

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

async function signup_post(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (e) {
    const errors = handleErrors(e);
    res.status(404).json({ errors });
  }

  //   res.send(`${email} ${password}`);
}

function login_post(req, res) {
  const { email, password } = req.body;

  res.send(`${email} ${password}`);
}

module.exports = {
  signup_get,
  login_post,
  signup_post,
  login_get,
};
