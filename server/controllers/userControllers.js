const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    // if (users.length <= 1) {
    //   const error = new Error('Resource Not Found');
    //   error.status = 404;
    //   return next(error);
    // }

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    // console.log(`Server Error: ${err.message}`);
    next(err);
  }
};

// @desc    Create new user
// @route   POST /api/users
// @access  Public
const createUser = async (req, res, next) => {
  try {
    // Extract data from request body
    const { username, age, salaried } = req.body;

    // Create a new user object
    const newUser = {
      username,
      age,
      salaried,
    };

    // Construct a new user based on schema
    let user = new User(newUser);

    // Save to DB
    await user.save();

    // Only send the details that send by client as response by copying
    user = {
      ...newUser,
    };

    // Sends a response to client
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    // console.log(`Server Error: ${err.message}`);
    next(err);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
