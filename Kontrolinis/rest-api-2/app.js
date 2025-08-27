import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { setUser } from "./middleware/setUser.js";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes/routes.js";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbUri =
  "mongodb+srv://dovydas372:dovydas372@node1.4u7tomw.mongodb.net/Bank";

mongoose.connect(dbUri).then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(setUser);

app.use(routes);
app.use((req, res) => {
  res.status(404).render("404", { title: "klaida" });
});
