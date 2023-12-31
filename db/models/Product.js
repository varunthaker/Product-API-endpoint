import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  imageSrc: { type: String },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
