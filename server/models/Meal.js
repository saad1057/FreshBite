const mongoose = require('mongoose');

// Define the schema for the Meal model
const mealSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL to an image of the meal
  },
}, {
  timestamps: true,
});

// Create the model using the schema
const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
