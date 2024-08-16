const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  message: String,
  date: { type: Date, default: Date.now },
  registeredDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ContactUs', contactUsSchema);


