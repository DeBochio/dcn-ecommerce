const express = require("express");
const router = express.Router();
const Stock = require("../models/stock");

router.get("/", async (req, res) => {
  const stock = await Stock.find().populate("product_id");
  res.json(stock);
});

router.get("/:id", async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id).populate("product_id");
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const stock = new Stock({
    product_id: req.body.product_id,
    quantity: req.body.quantity,
  });
  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/", (res, req) => {
  try {
    stock = Stock.findById(req.params.id);

    stock.quantity = req.body.quantity;

    stock.save();
    res.json(stock);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/", (req, res) => {
  try {
    const result = Stock.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
