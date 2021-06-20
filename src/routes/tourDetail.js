const express = require('express');
const router = express.Router();
const controllers = require('../../src/app/controllers/tourDetailsController');
const index = require('../../src/app/controllers/homeController');


router.get('/:slug',controllers.index);


module.exports = router;