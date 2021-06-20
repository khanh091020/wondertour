const express = require('express');
const router = express.Router();
const controller = require('../../app/adminController/loadListTourController');
const checkboxController = require('../../app/adminController/checkboxListTourContrller')

router.post('/execute',checkboxController.execute)
router.get('/trash',controller.show__deleted)
router.get('/',controller.show);

module.exports = router;