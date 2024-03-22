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
    // Extract data from request body
    const { username, age, salaried } = req.body;

    // Construct a new user based on schema
    let user = new User({
      username,
      age,
      salaried,
    });

    // Save to DB
    await user.save();

    // Sends a response to client
    res.status(201).json({
      message: `New user ${username} is created`,
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
