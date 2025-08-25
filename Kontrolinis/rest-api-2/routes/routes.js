import express from "express";
import * as controller from "../controllers/controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
//login
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});
//signup
router.get("/signup", (req, res) => {
  res.render("signup", { title: "Signup" });
});

router.use(requireAuth);
router.get("/", controller.accounts_get);
router.post("/account/create", controller.accountsCreate_post);
router.get("/account/create", controller.accountsCreate_get);
router.get("/account/:id", controller.accountDetails_get);
router.get("/accountEdit/:id", controller.accountEdit_get);
router.post("/accountEdit/:id", controller.accountEdit_post);
router.delete("/accountDelete/:id", controller.account_delete);
export default router;
