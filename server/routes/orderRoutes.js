const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Create a new order
router.post('/orders', async (req, res) => {
  try {
    const { customer, cart, total } = req.body;
    const order = new Order({ customer, cart, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 