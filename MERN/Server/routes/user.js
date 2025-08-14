import express from "express";
import { loginUser, sigunupUser } from "../controller/userController";

const router = express.Router();

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", sigunupUser);

export default router;
