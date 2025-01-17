import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    clerkId: { type: String, unique: true, required: true },
    type: { type: String, required: true },
    stripeId: { type: String },
    domains: [{ type: mongoose.Schema.Types.ObjectId, ref: "Domain" }],
    campaign: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
    subscription: { type: mongoose.Schema.Types.ObjectId, ref: "Billings" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
