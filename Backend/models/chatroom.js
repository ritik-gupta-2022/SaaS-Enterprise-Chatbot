import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema(
  {
    live: { type: Boolean, default: false },
    mailed: { type: Boolean, default: false },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    message: [{ type: mongoose.Schema.Types.ObjectId, ref: "ChatMessage" }],
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
export default ChatRoom;
