const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    
    if(users.length <= 1) {
      const error = new Error('Resource Not Found');
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      count: users.length,
      data: users,
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
