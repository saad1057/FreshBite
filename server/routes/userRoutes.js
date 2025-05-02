const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to login user
router.post('/users/login', loginUser);

module.exports = router;
