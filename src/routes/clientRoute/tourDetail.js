const express = require('express');
const router = express.Router();
const controllers = require('../../app/controllers/tourDetailsController');
const index = require('../../app/controllers/homeController');


router.get('/:slug',controllers.index);


module.exports = router;