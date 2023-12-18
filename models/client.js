const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
