const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    images: [String],
    price: Number,
    thumbnail: String,
    discountPrice: Number,
  },
  { collection: "products" }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
