const express = require('express');
const { getMeals, createMeal } = require('../controllers/mealController');

const router = express.Router();

// Route to get all meals
router.get('/meals', getMeals);

// Route to create a new meal
router.post('/meals', createMeal);

module.exports = router;
