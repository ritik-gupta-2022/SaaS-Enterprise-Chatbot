import mongoose from "mongoose";

const billingsSchema = new mongoose.Schema(
  {
    plan: { type: String, enum: ["STANDARD", "PRO", "ULTIMATE"], default: "STANDARD" },
    credits: { type: Number, default: 10 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  },
  { timestamps: true }
);

const Billings = mongoose.model("Billings", billingsSchema);
export default Billings;
