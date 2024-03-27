const path = require('path');

// Dependencies
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Import Routes
const userRoutes = require('./routes/userRoutes');

// Use variables in environment file
dotenv.config();

// Express App
const app = express();

// Parsing requests body
app.use(express.json());

// CORS Policy
app.use(cors());

//Connect to DB
connectDB();

// Routes which will handle requests
app.use('/api/users', userRoutes);

// Directory & Path

/*
For Testing/Checking Directory, File, Path
console.log(path.resolve(__dirname, '..', 'client','build'));
console.log(path.join((path.resolve(__dirname, '..')),( "./client")));
*/

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res, next) => {
    try {
      res.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    } catch (err) {
      next(err);
    }
  });
}

// Global Error middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      success: false,
      message: error.message,
    });
  }

  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Set PORT
const PORT = process.env.PORT || 3500;

// Server running on PORT & listening to requests
app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
