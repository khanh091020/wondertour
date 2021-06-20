const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/homeController')

router.get('/',newsController.index);

module.exports = router;