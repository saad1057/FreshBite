const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Make sure email is unique
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
