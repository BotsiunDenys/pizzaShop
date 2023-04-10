import mongoose from "mongoose";

const Beverage = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

export default mongoose.model("Beverage", Beverage);
