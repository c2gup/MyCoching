const express = require('express');
const router = express.Router();
const studentRegistrationController = require('../controllers/studentRegistrationController');

// Create a new student registration
router.post('/', studentRegistrationController.createStudentRegistration);

// Get all student registrations
router.get('/', studentRegistrationController.getAllStudentRegistrations);

// Get a single student registration by ID
router.get('/:id', studentRegistrationController.getStudentRegistrationById); 

// Update a student registration by ID
router.put('/:id', studentRegistrationController.updateStudentRegistrationById);

// Delete a student registration by ID
router.delete('/:id', studentRegistrationController.deleteStudentRegistrationById);

module.exports = router;



