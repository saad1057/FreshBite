const Meal = require('../models/Meal');

// Get all meals
const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new meal
const createMeal = async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const meal = new Meal({ name, description, price, image });
    await meal.save();
    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getMeals, createMeal };
