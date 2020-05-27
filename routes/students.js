const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students');

router.post('/update-student', studentController.edit);
router.post('/add-student', studentController.add);

module.exports = router;