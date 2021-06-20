const express = require('express');
const router = express.Router();
const controller = require('../../src/app/controllers/searchController');

router.get('/',controller.show);

module.exports = router;