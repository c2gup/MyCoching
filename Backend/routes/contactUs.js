const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController');

// Route to get all contact us forms
router.get('/', async (req, res) => {
  try {
    const forms = await contactUsController.getAllContactUsForms();
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching contact forms:', error);
    res.status(500).json({ message: 'Error fetching contact forms.' });
  }
});

// Route to create a new contact us form
router.post('/', async (req, res) => {
  try {
    const result = await contactUsController.createContactUsForm(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating contact form:', error);
    res.status(500).json({ message: 'Error creating contact form.' });
  }
});

module.exports = router;

