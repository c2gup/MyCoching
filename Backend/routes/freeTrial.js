const express = require('express');
const router = express.Router();
const freeTrialController = require('../controllers/freeTrialController');

// Get paginated free trials
router.get('/', freeTrialController.getPaginatedFreeTrials);

// Create a new free trial
router.post('/', freeTrialController.createFreeTrial);

// Get a free trial by ID
router.get('/:id', freeTrialController.getFreeTrialById);

// Update a free trial by ID
router.put('/:id', freeTrialController.updateFreeTrialById);

// Delete a free trial by ID
router.delete('/:id', freeTrialController.deleteFreeTrialById);

module.exports = router;
