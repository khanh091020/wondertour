const express = require('express');
const router = express.Router();
const controller = require('../../app/controllers/signUpController');

router.post('/',controller.creatAccount)
router.get('/',controller.index);

module.exports = router;