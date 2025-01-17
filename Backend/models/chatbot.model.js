import mongoose from "mongoose";

const chatBotSchema = new mongoose.Schema(
  {
    welcomeMessage: { type: String },
    icon: { type: String },
    background: { type: String },
    textColor: { type: String },
    helpdesk: { type: Boolean, default: false },
    domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain", unique: true },
  },
  { timestamps: true }
);

const ChatBot = mongoose.model("ChatBot", chatBotSchema);
export default ChatBot;
