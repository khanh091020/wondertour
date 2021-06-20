const express = require('express');
const router = express.Router();
const controller = require('../../src/app/controllers/signUpController');

router.post('/',controller.creatAccount)
router.get('/',controller.index);

module.exports = router;