const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
  },
  supplier: {
    type: String,
    require: true,
  },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
