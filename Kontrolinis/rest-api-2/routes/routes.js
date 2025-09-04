import express from "express";
import * as controller from "../controllers/controller.js";
import * as userController from "../controllers/userController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
//login
router.get("/login", controller.login_get);
router.post("/login", userController.loginUser);

//signup
router.get("/signup", controller.signup_get);
router.post("/signup", userController.signupUser);

//routes
router.use(requireAuth);
router.get("/", controller.accounts_get);
router.post("/account/create", controller.accountsCreate_post);
router.get("/account/create", controller.accountsCreate_get);
router.get("/account/:id", controller.accountDetails_get);
router.get("/accountEdit/:id", controller.accountEdit_get);
router.post("/accountEdit/:id", controller.accountEdit_post);
router.delete("/accountDelete/:id", controller.account_delete);
router.get("/logout", userController.logoutUser);
export default router;
