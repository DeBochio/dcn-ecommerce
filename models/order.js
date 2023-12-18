const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Client = require("../models/client");
const Product = require("../models/products");

const OrderSchema = new Schema({
  date_of_order: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  id_client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Client,
    require: true,
  },
  id_product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
