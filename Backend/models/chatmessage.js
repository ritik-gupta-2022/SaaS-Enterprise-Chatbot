import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    role: { type: String, enum: ["user", "assistant"], default: "user" },
    chatRoomId: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" },
    seen: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);
export default ChatMessage;
