const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Get all users',
    });
  } catch (err) {
    console.log(`Server Error: ${err.message}`);
    next(err);
  }
};

// Create an user
const createUser = async (req, res, next) => {
  try {
    res.status(201).json({
      message: 'Create an user',
    });
  } catch (err) {
    console.log(`Server Error: ${err.message}`);
    next(err);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
