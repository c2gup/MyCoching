const ContactUs = require('../models/ContactUs'); // Correct path

// Example controller methods
exports.getAllContactUsForms = async () => {
  try {
    return await ContactUs.find();
  } catch (error) {
    throw new Error('Error fetching contact forms.');
  }
};

exports.createContactUsForm = async (formData) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = formData;
    const contactEntry = new ContactUs({
      name: `${firstName} ${lastName}`,
      email,
      mobile: phoneNumber,
      message,
    });

    await contactEntry.save();
    return { message: 'Message sent successfully!' };
  } catch (error) {
    throw new Error('Error creating contact form.');
  }
};


