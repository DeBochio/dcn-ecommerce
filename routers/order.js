const express = require("express");
const Order = require("../models/order");
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const order = new Order({
    date_of_order: req.body.date_of_order,
    status: req.body.status,
    id_client: req.body.id_client,
    id_product: req.body.id_product,
    quantity: req.body.quantity,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const order = Order.findById(req.params.id);

    order.date_of_order = req.body.date_of_order;
    order.status = req.body.status;
    order.id_client = req.body.id_client;
    order.id_product = req.body.id_product;
    order.quantity = req.body.quantity;

    order.save();
    res.json(order);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
