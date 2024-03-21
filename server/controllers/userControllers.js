const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Get all users',
    });
  } catch (err) {
    console.log(`Server Error: ${err.message}`);
    res.status(500).json({
      message: 'Server Error',
    });
  }
};

// Create an user
const createUser = async (req, res) => {
  try {
    res.status(201).json({
      message: 'Create an user',
    });
  } catch (err) {
    console.log(`Server Error: ${err.message}`);
    res.status(500).json({
      message: 'Server Error',
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
