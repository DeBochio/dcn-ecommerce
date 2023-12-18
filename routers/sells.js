const express = require("express");
const Sells = require("../models/sells");
const router = express.Router();

router.get("/", async (req, res) => {
  const sells = await Sells.find();
  res.json(sells);
});

router.get("/:id", async (req, res) => {
  try {
    const sell = await Sells.findById(req.params.id);
    res.json(sell);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const sell = new Sells({
    date_of_sell: req.body.date_of_sell,
    total: req.body.total,
    delivery_status: req.body.status,
    payment_method: req.body.payment_method,
    id_client: req.body.id_client,
    id_product: req.body.id_product,
  });

  try {
    const newSell = await sell.save();
    res.status(201).json(newSell);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const sell = await Sells.findById(req.params.id);

    sell.date_of_sell = req.body.date_of_sell;
    sell.total = req.body.total;
    sell.delivery_status = req.body.status;
    sell.payment_method = req.body.payment_method;
    sell.id_client = req.body.id_client;
    sell.id_product = req.body.id_product;

    sell.save();
    res.json(sell);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Sells.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
