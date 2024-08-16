const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true }
});

const studentRegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: addressSchema, required: true },
  dateOfBirth: { type: Date, required: true },
  course: { type: String, required: true },
  gender: { type: String, required: true },
  message: { type: String },
  registeredDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' } // Status field with default value
});

module.exports = mongoose.model('StudentRegistration', studentRegistrationSchema);
