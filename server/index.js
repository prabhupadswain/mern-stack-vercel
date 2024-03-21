const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

// Import Routes
const userRoutes = require('./routes/userRoutes');

// Express App
const app = express();

//Connect to DB
connectDB();

// Routes which will handle requests
app.use('/api/users', userRoutes);

// Global Error middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }

  res.status(500).json({ message: 'Internal Server Error' });
});

// Set PORT
const PORT = process.env.PORT || 3500;

// Server running on PORT & listening to requests
app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
