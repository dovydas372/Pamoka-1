import express from "express";
import * as controller from "../controller/controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
router.use(requireAuth);

// paimti visas programas
router.get("/programs", controller.getPrograms);
//post -sukuria nauja pratima
router.post("/programs", controller.createProgram);

export default router;
