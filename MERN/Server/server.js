import dotenv from "dotenv";
import express from "express";
import pratimaiRoutes from "./routes/pratimai.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
//midleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/pratimai", pratimaiRoutes);

mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((err) => console.log(err));
