import mongoose from "mongoose";

const domainSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String },
    chatBot: { type: mongoose.Schema.Types.ObjectId, ref: "ChatBot" },
    helpdesk: [{ type: mongoose.Schema.Types.ObjectId, ref: "HelpDesk" }],
    filterQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: "FilterQuestions" }],
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    customer: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  },
  { timestamps: true }
);

const Domain = mongoose.model("Domain", domainSchema);
export default Domain;
