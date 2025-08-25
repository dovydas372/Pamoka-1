import BankAccounts from "../models/BankAccount.js";

export const accounts_get = async (req, res, next) => {
  try {
    const accounts = await BankAccounts.find().sort({ createdAt: -1 });

    res.render("home", { title: "All accounts", accounts });
  } catch (err) {
    console.error(err);
    next();
  }
};

export const accountsCreate_post = async (req, res, next) => {
  const account = new BankAccounts(req.body);
  account
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => {
      console.log(err);
      next();
    });
};

export const accountsCreate_get = async (req, res, next) => {
  try {
    res.render("createAccount", { title: "Create bank account" });
  } catch (err) {
    console.error(err);
    next();
  }
};

export const accountDetails_get = async (req, res, next) => {
  const id = req.params.id;

  try {
    const account = await BankAccounts.findById(id);
    console.log(account);
    res.render("accountDetails", { title: "account details", account });
  } catch (err) {
    console.error(err);
    next();
  }
};

export const accountEdit_get = async (req, res, next) => {
  const id = req.params.id;
  try {
    const account = await BankAccounts.findById(id);
    console.log(account);
    res.render("accountEdit", { title: "account edit", account });
  } catch (err) {
    console.error(err);
    next();
  }
};

export const accountEdit_post = async (req, res, next) => {
  const id = req.params.id;

  try {
    await BankAccounts.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/account/${id}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const account_delete = (req, res) => {
  BankAccounts.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send({ message: "Account deleted", deleted: result });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Error deleting account" });
    });
};
