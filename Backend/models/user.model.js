import mongoose from "mongoose";
import validator from "validator"; // Import validator for email validation

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    // avatar:{
    //     public_id:{
    //         type:String,
    //         required:true
    //     },
    //     url:{
    //         type:String,
    //         required:true
    //     }
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    credit: {
      type: Number,
      default: 100,
    },
    // businessIds: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId, // Fixed ObjectId reference
    //     ref: "Business",
    //   },
    // ],
  },
  { timestamps: true } // Enabled timestamps for `createdAt` and `updatedAt`
);

const User = mongoose.model("User", userSchema); // Use ES Modules for consistency
export default User;