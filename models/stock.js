const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("../models/products");

const StockSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    require: true,
  },
  quantity: {
    type: Number,
  },
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
