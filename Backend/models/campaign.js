import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    customers: [{ type: String }],
    domain: [{ type: mongoose.Schema.Types.ObjectId, ref: "Domain" }],
    template: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Campaign = mongoose.model("Campaign", campaignSchema);
export default Campaign;
