const express = require('express');
const router = express.Router();
const controller = require('../../app/adminController/updateController');

router.get('/:id',controller.show);
router.put('/:id',controller.save);

module.exports = router;