const express = require('express');
const router = express.Router();
const loginHandler = require('../controllers/loginHandler');

router.post('/login', loginHandler);

module.exports = router;
