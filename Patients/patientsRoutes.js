const express = require('express');
const { getAll } = require('./patientsController');

const router = express.Router();

router.route('/').get(getAll);

module.exports = router;
