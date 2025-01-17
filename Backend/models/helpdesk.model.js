import mongoose from "mongoose";

const helpDeskSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain" },
  },
  { timestamps: true }
);

