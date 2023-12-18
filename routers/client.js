const express = require("express");
const Client = require("../models/client");
const router = express.Router();

router.get("/", async (req, res) => {
  const client = await Client.find();
  res.json(client);
});

router.get("/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const client = new Client({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
  });
  try {
    const newCliente = await client.save();
    res.status(201).json(newCliente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    client.name = req.body.name;
    client.address = req.body.address;
    client.email = req.body.email;
    client.phone = req.body.phone;
    client.save();
    res.json(client);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
