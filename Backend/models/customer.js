import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    email: { type: String },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "CustomerResponses" }],
    chatRoom: [{ type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" }],
    booking: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bookings" }],
    domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain" },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
