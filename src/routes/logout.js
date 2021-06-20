const express = require('express')
const router = express.Router();
const logoutController = require('../../src/app/controllers/logOutController');

router.get('/',logoutController.logout)

module.exports = router