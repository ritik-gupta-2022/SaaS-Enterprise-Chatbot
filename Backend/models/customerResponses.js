import mongoose from "mongoose";

const customerResponsesSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answered: { type: String },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  },
  { timestamps: true }
);

const CustomerResponses = mongoose.model("CustomerResponses", customerResponsesSchema);
export default CustomerResponses;
