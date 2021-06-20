const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/loginController')

router.get('/',newsController.index);
router.post('/',newsController.checkLogin)

module.exports = router;