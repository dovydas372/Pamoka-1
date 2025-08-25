import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    accountNr: { type: String, required: true, unique: true },
    bank: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
    currency: { type: String, required: true, default: "EUR" },
  },
  { timestamps: true }
);

const BankAccount = mongoose.model("Account", AccountSchema);

export default BankAccount;
