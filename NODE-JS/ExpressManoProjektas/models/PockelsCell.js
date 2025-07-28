const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pockelsCellSchema = new schema(
  {
    SN: { type: String, required: true },
    type: { type: String, required: true },
    kristalo1SN: { type: String, required: true },
    kristalo2SN: { type: String, required: true },
    hrSN: { type: Number, required: true },
    prizmesSN: { type: Number, required: false },
  },
  { timestamps: true }
);

const PockelsCells = mongoose.model(
  "PockelsCells",
  pockelsCellSchema,
  "komponentai"
);

module.exports = PockelsCells;
