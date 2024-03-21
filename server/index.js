const express = require('express');
const connectDB = require('./config/db');

const dotenv = require('dotenv').config();

// Express App
const app = express();

//Connect to DB
connectDB();

// Middleware to handle requests
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'OK from Server - Sanity Check',
  });
});

// Set PORT
const PORT = process.env.PORT || 3500;

// Server running on PORT & listening to requests
app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
