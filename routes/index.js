const express = require('express');

const router = express.Router();

const studentController = require('../controllers/students');

router.get('/', studentController.getAll);

router.get('/add-student', studentController.navigateToAddPage);

router.get('/update-student/:id', studentController.getById);

router.post('/delete-student/:id', studentController.delete);

router.post('/search-student', studentController.search);

module.exports = router;