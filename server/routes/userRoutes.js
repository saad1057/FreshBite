const express = require('express');
const { createUser, loginUser, getUsers, deleteUser, updateUser, adminCreateUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');
const User = require('../models/User');

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

// PUT /api/users/profile
router.put('/profile', protect, async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, lastName, email, currentPassword, newPassword } = req.body;
    let update = { name, lastName, email };

    const user = await User.findById(userId);

    // If password change is requested
    if (currentPassword && newPassword) {
      // Debug logs
      console.log('Current password input:', currentPassword);
      console.log('Password in DB:', user.password);

      // Check current password
      const isMatch = await user.matchPassword(currentPassword);
      console.log('isMatch:', isMatch);

      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }
      user.password = newPassword; // This will be hashed by your pre-save hook
      await user.save();
      return res.json({ message: 'Password updated successfully' });
    }

    // Update other fields
    await User.findByIdAndUpdate(userId, update, { new: true });
    return res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Profile update failed' });
  }
});

module.exports = router;
