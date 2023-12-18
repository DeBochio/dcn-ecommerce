const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Client = require("../models/client");
const Product = require("../models/products");

const SellsSchema = new Schema({
  date_of_sell: {
    type: String,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
  delivery_status: {
    type: String,
    require: true,
  },
  payment_method: {
    type: Number,
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
});

const Sells = mongoose.model("Sells", SellsSchema);
module.exports = Sells;
