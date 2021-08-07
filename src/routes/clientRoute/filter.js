const express = require('express');
const router = express.Router();
const filterController = require('../../app/controllers/filterController');


router.get('/tour',filterController.filterTour)

module.exports = router