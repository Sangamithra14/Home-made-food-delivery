const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const { items, total, address } = req.body;
    const newOrder = new Order({ items, total, address });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

module.exports = router;
