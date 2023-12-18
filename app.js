const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// const Product = require("./models/products");s
// const Stock = require("./models/stock");
// const Client = require("./models/client");

const pruductRouster = require("./routers/products");
const stockRouter = require("./routers/stock");
const clientRouter = require("./routers/client");
const sellsRouter = require("./routers/sells");
const orderRouter = require("./routers/order");

require("dotenv").config();

app.use("/products", pruductRouster);
app.use("/stock", stockRouter);
app.use("/client", clientRouter);
app.use("/sells", sellsRouter);
app.use("/order", orderRouter);

mongoose
  .connect(
    "mongodb+srv://demaxvc:KgmEkWjtxPrG32xl@cluster0.5sv5qt0.mongodb.net/"
  )
  .then(() => console.log("connected to db"));

app.listen(3000, () => console.log("Server is runing"));
