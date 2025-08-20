import mongoose from "mongoose";

const Schema = mongoose.Schema;

const programaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pratimai: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
      },
    ],
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Program", programaSchema);
