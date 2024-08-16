const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const Admin = require('./models/authAdmin');
const authRoutes = require('./routes/authRoutes'); // Import authRoutes
const session = require('express-session');
const dashboardRoutes = require('./routes/dashboard'); 
// const freeTrialRoutes = require('./routes/freeTrialRoutes');
const asreeTrial = require('./routes/freeTrial');

const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
app.use(cors({
  origin: 'http://127.0.0.1:5174', // Allow requests from your frontend
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Function to create Admin user if it doesn't exist
const createAdminUser = async () => {
  try {
    const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (!adminExists) {
      const admin = new Admin({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
      });
      await admin.save();
      console.log('Admin user created');
    }
  } catch (error) {
    console.error('Error creating admin user', error.message);
  }
};

// Create Admin User
createAdminUser();

// Routes
app.use('/api/student-registrations', require('./routes/studentRegistration'));
app.use('/api/free-trials', require('./routes/freeTrial'));
app.use('/api/contact-us', require('./routes/contactUs'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/auth', authRoutes); // Use authRoutes for auth endpoints
app.use('/api/auth', dashboardRoutes);
app.use('/api/free-trials',asreeTrial );


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 120000 } // 2 minutes
}));


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

