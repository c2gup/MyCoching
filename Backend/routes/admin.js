const express = require('express');
const router = express.Router();
const Student = require('../models/StudentRegistration');

router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;  // Set the limit to 5 records per page
  const skip = (page - 1) * limit;

  try {
    const totalStudents = await Student.countDocuments();
    const totalPages = Math.ceil(totalStudents / limit);
    
    const students = await Student.find()
      .skip(skip)
      .limit(limit);

    res.json({
      students,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;


