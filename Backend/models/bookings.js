import mongoose from "mongoose";

const bookingsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    slot: { type: String, required: true },
    email: { type: String, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain" },
  },
  { timestamps: true }
);

const Bookings = mongoose.model("Bookings", bookingsSchema);
export default Bookings;
