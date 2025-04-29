const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

module.exports = router;
