const photographerController = require('../app/controllers/photographerController');
const express = require('express');
const router = express.Router();

router.get('/:slug/profile',photographerController.showDetails)
router.get('/',photographerController.show)

module.exports = router