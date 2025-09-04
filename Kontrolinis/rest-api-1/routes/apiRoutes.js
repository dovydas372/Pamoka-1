import express from "express";
import * as controller from "../controllers/controller.js";

const router = express.Router();

router.get("/programuotojai", controller.prog_get);
router.post("/programuotojai", controller.prog_post);
router.post("/programuotojai/:id", controller.prog_put);
router.delete("/programuotojai/:id", controller.prog_delete);
router.get("/edit/:id", controller.progDetails_get);

export default router;
