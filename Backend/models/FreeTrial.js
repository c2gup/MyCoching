

const mongoose = require('mongoose');

const freeTrialSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: {
    street: String,
    city: String,
    pincode: String
  },
  dateOfBirth: Date,
  course: String,
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
  message: String,
  trialDate: Date,
  status: String,
  registeredDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FreeTrial', freeTrialSchema);

