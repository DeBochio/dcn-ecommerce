const express = require("express");
const Product = require("../models/products");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    supplier: req.body.supplier,
  });

  try {
    const newProduct = await product.save();
    console.log(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
    product.supplier = req.body.supplier;

    product.save();
    res.json(product);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
