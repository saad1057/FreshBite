const express = require('express');
const { createUser, loginUser, getUsers, deleteUser, updateUser, adminCreateUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to login user
router.post('/users/login', loginUser);

// Admin routes
router.get('/admin/users', protect, admin, getUsers);
router.post('/admin/users', protect, admin, adminCreateUser);
router.put('/admin/users/:id', protect, admin, updateUser);
router.delete('/admin/users/:id', protect, admin, deleteUser);

module.exports = router;
