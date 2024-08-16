const FreeTrial = require('../models/FreeTrial');

// Get all free trials
exports.getAllFreeTrials = async (req, res) => {
  try {
    const trials = await FreeTrial.find();
    res.json(trials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new free trial
exports.createFreeTrial = async (req, res) => {
  const trial = new FreeTrial(req.body);
  try {
    await trial.save();
    res.status(201).json(trial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a free trial by ID
exports.getFreeTrialById = async (req, res) => {
  try {
    const trial = await FreeTrial.findById(req.params.id);
    if (trial) {
      res.status(200).json(trial);
    } else {
      res.status(404).json({ message: 'Free Trial not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a free trial by ID
exports.updateFreeTrialById = async (req, res) => {
  try {
    const updatedTrial = await FreeTrial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedTrial) {
      res.status(200).json(updatedTrial);
    } else {
      res.status(404).json({ message: 'Free Trial not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a free trial by ID
exports.deleteFreeTrialById = async (req, res) => {
  try {
    const deletedTrial = await FreeTrial.findByIdAndDelete(req.params.id);
    if (deletedTrial) {
      res.status(200).json({ message: 'Free Trial deleted' });
    } else {
      res.status(404).json({ message: 'Free Trial not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Get paginated free trials
exports.getPaginatedFreeTrials = async (req, res) => {
  const page = parseInt(req.query.page) || 1;  // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10;  // Default to 10 records per page
  const skip = (page - 1) * limit;

  try {
    const totalFreeTrials = await FreeTrial.countDocuments();
    const totalPages = Math.ceil(totalFreeTrials / limit);

    const freeTrials = await FreeTrial.find()
      .skip(skip)
      .limit(limit);

    res.json({
      freeTrials,
      totalPages,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Other CRUD operations
exports.getAllFreeTrials = async (req, res) => {
  try {
    const trials = await FreeTrial.find();
    res.json(trials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFreeTrial = async (req, res) => {
  const trial = new FreeTrial(req.body);
  try {
    await trial.save();
    res.status(201).json(trial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFreeTrialById = async (req, res) => {
  try {
    const trial = await FreeTrial.findById(req.params.id);
    if (trial) {
      res.status(200).json(trial);
    } else {
      res.status(404).json({ message: 'Free Trial not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFreeTrialById = async (req, res) => {
  try {
    const updatedTrial = await FreeTrial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedTrial) {
      res.status(200).json(updatedTrial);
    } else {
      res.status(404).json({ message: 'Free Trial not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFreeTrialById = async (req, res) => {
  try {
    const deletedTrial = await FreeTrial.findByIdAndDelete(req.params.id);
    if (deletedTrial) {
      res.status(200).json({ message: 'Free Trial deleted' });
    } else {
      res.status(404).json({ message: 'Free Trial not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
