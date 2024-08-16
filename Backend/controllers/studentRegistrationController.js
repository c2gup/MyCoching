const StudentRegistration = require('../models/StudentRegistration');

// Create a new student registration
const createStudentRegistration = async (req, res) => {
  try {
    // Destructure request body
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      streetAddress,
      city,
      pincode,
      dateOfBirth,
      course,
      gender,
      message
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !streetAddress || !city || !pincode || !dateOfBirth || !course || !gender) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check for existing registration with the same email
    const existingStudent = await StudentRegistration.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({ message: 'Student with this email already exists.' });
    }

    // Create new student registration
    const newStudent = new StudentRegistration({
      firstName,
      lastName,
      email,
      phoneNumber,
      address: {
        streetAddress,
        city,
        pincode
      },
      dateOfBirth,
      course,
      gender,
      message,
      status: 'Registered'
    });

    // Save new student to the database
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all student registrations
const getAllStudentRegistrations = async (req, res) => {
  try {
    const students = await StudentRegistration.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single student registration by ID
const getStudentRegistrationById = async (req, res) => {
  try {
    const student = await StudentRegistration.findById(req.params.id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student registration by ID
const updateStudentRegistrationById = async (req, res) => {
  try {
    const updatedStudent = await StudentRegistration.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedStudent) {
      res.status(200).json(updatedStudent);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student registration by ID
const deleteStudentRegistrationById = async (req, res) => {
  try {
    const deletedStudent = await StudentRegistration.findByIdAndDelete(req.params.id);
    if (deletedStudent) {
      res.status(200).json({ message: 'Student deleted' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudentRegistration,
  getAllStudentRegistrations,
  getStudentRegistrationById,
  updateStudentRegistrationById,
  deleteStudentRegistrationById
};
