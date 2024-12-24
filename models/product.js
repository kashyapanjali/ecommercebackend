const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: [String], required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  productId: { type: String, unique: true, required: true },
  inStockValue: { type: Number, required: true },
  soldStockValue: { type: Number, default: 0 },
  visibility: { type: String, default: "on" },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
