exports.getAdminData = async (req, res) => {
  try {
    // Get the page and limit from the query parameters or set default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;  // Default to 5 records per page
    const skip = (page - 1) * limit;

    // Fetch the students with pagination
    const students = await StudentRegistration.find().skip(skip).limit(limit);

    // Get the total count of students and calculate total pages
    const totalCount = await StudentRegistration.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);

    // Respond with the students data and total pages
    res.status(200).json({ students, totalPages });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


