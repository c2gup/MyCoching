const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to check JWT token
const checkAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!req.session.userId || !token) {
    return res.status(401).json({ message: 'Session expired. Please log in again.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token expired. Please log in again.' });
    }

    req.user = decoded; // Store the decoded token in request
    next(); // Proceed to the route handler
  });
};

// Dashboard route
router.get('/dashboard', checkAuth, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Admin Dashboard' });
});

module.exports = router;
