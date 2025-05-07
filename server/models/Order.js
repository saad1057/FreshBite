const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    firstName: String,
    lastName: String,
    street: String,
    apartment: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    instructions: String,
    email: String,
    billingSame: Boolean,
    offers: Boolean,
  },
  cart: [
    {
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema); 