const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userControllers');

// GET - Fetch all users.
router.route('/').get(getAllUsers);

// POST - Create an user.
router.route('/').post(createUser);

module.exports = router;
