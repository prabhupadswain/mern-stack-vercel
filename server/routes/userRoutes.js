const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userControllers');

// Get all users
router.route('/').get(getAllUsers);

// Create an user
router.route('/').post(createUser);

module.exports = router;
