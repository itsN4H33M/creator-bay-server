const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  features: {
    type: [String],
  },
  images: {
    type: [String],
    required: true,
  },
});

const products = mongoose.model("products", productSchema);

module.exports = products;
