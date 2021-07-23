const express = require('express');
const router = express.Router();
const controller = require('../../src/app/controllers/searchController');

router.get('/flight',controller.showFlight)
router.get('/hotel',controller.showHotel)
router.get('/',controller.show);

module.exports = router;