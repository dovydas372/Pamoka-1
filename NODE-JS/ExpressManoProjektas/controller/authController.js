const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = { username: "", password: "" };

  if (err.code === 11000) {
    errors.username = "el. pastas jau uzregistruotas";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const createToken = (id) => {
  return jwt.sign({ id }, "slaptas dalykas");
};

async function signup_post(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
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

  //   res.send(`${username} ${password}`);
}

async function login_post(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.status(201).json({ user: user._id });
  } catch (e) {
    const errors = handleErrors(e);
    if (e.message === "incorrect username") {
      errors.username = "username neuzregistruotas";
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
  login_post,
  signup_post,

  logout_get,
};
