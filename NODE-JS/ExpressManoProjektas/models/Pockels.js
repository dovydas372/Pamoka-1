const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pockelsSchema = new schema(
  {
    SN: { type: Number, required: true },
    type: { type: String, required: true },
    kristalo1SN: { type: String, required: true },
    kristalo2SN: { type: String, required: true },
    hrSN: { type: Number, required: true },
    prizmesSN: { type: Number, required: false },
  },
  { timestamps: true }
);

const Pockels = mongoose.model("komponentai", pockelsSchema);

module.exports = Pockels;
