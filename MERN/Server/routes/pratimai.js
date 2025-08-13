import express from "express";
import * as controller from "../controller/controller.js";

const router = express.Router();

// GET – paimti visus pratimus
router.get("/", controller.getWorkouts);

// GET – paimti vieną pratimą
router.get("/:id", controller.getWorkout);

// PATCH – redaguoti vieną pratimą
router.patch("/:id", controller.updateWorkout);

// DELETE – ištrinti vieną pratimą
router.delete("/:id", controller.deleteWorkout);

//post -sukuria nauja pratima
router.post("/", controller.createWorkout);

export default router;
