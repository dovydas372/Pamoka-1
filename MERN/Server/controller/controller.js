import Workout from "../models/pratimoModelis.js";
import mongoose from "mongoose";
import Program from "../models/programaModelis.js";

//get -paimti visus pratimus pagal user_id
export const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  const pratimai = await Workout.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(pratimai);
};
//get -paimti visas programas
export const getPrograms = async (req, res) => {
  const programos = await Program.find().sort({ createdAt: -1 });
  res.status(200).json(programos);
};

//get paimt viena pratima

export const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio pratimo nėra." });
  }
  const pratimas = await Workout.findById(id);
  if (!pratimas) {
    return res.status(404).json({ error: "Tokio pratimo nera" });
  }
  res.status(200).json(pratimas);
};

//post sukurti nauja pratima

export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Prašome užpildyti visus laukelius", emptyFields });
  }

  try {
    const user_id = req.user._id;
    const pratimas = await Workout.create({ title, reps, load, user_id });
    res.status(200).json(pratimas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//post sukurti nauja programą

export const createProgram = async (req, res) => {
  const { title, pratimai } = req.body;

  // let emptyFields = [];

  if (!title) {
    return res.status(400).json({ error: "Prašome įvesti pavadinimą" });
  }

  try {
    const user_id = req.user._id;
    const programa = await Program.create({ title, pratimai, user_id });
    res.status(200).json(programa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//updeitinti pratimą

export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio pratimo nėra." });
  }
  const pratimas = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!pratimas) {
    return res.status(404).json({ error: "Tokio pratimo nera" });
  }
  res.status(200).json(pratimas);
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Tokio pratimo nėra." });
  }
  const pratimas = await Workout.findOneAndDelete({ _id: id });
  if (!pratimas) {
    return res.status(404).json({ error: "Tokio pratimo nera" });
  }
  res.status(200).json(pratimas);
};
