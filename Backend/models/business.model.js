import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    businessUrl:{ type:String, required:true},
    icon: { type: String },
    chatBot: { type: mongoose.Schema.Types.ObjectId, ref: "ChatBot" },
    helpdesk: [{ type: mongoose.Schema.Types.ObjectId, ref: "HelpDesk" }],
    filterQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: "FilterQuestions" }],
    customer: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
export default Business;
