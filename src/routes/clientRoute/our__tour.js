const express = require('express');
const router = express.Router();
const newsController = require('../../app/controllers/OurTourController')

router.get('/',newsController.index);

module.exports = router;