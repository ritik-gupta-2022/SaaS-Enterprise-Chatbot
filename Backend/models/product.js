import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
