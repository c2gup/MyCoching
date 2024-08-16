const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/authAdmin'); // Adjust the path as needed

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Use environment variables for JWT secret
    const jwtSecret = process.env.JWT_SECRET;

    // Fetch admin from database
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      jwtSecret,
      { expiresIn: '2m' } // Token expires in 1 minute
    );

    // Send the token in response
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = loginHandler;

    