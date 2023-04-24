import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model("Product", Product);
