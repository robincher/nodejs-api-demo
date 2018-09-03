'use strict';
const express = require('express');
const router = express.Router();

router.use('/tasks', require('./tasks'));

module.exports = router;